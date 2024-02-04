import { Buffer } from 'buffer'
import * as R from 'remeda'
import { match } from 'ts-pattern'

const LOGGING_ENABLED = true

type TextCodeSize = 1 | 2 | 4

type OneCharacterTextCode = 'M' | 'N'
type TwoCharacterTextCode = '0F'
type FourCharacterTextCode = '1AAB'

type TextCode = OneCharacterTextCode | TwoCharacterTextCode | FourCharacterTextCode

type Text = string & { __type: 'text' }
type Binary = Buffer & { __type: 'binary' }
type Raw = [TextCode, Buffer] & { __type: 'raw' }

interface Short { code: 'M', value: Buffer }
interface Long { code: 'N', value: Buffer }
interface SHA3_512_Digest { code: '0F', value: Buffer }
interface SECP_256k1_Pub_or_Enc_Key { code: '1AAB', value: Buffer }

type Primitive =
Short |
Long |
SHA3_512_Digest |
SECP_256k1_Pub_or_Enc_Key

const makePrimitive = (code: TextCode, primitive: any): Primitive =>
  match(code)
    .with('M', () => makeShort(primitive))
    .with('N', () => makeLong(primitive))
    .with('0F', () => makeSha3512Digest(primitive))
    .with('1AAB', () => makeSECPPubOrEncKey(primitive))
    .exhaustive()

const makeShort = (primitive: number): Short => {
  const hex = primitive.toString(16)
  // todo: how to avoid throwing an error here?
  if (hex.length > 4) throw new Error('primitive is too big')
  return {
    code: 'M',
    value: Buffer.from(hex.padStart(4, '0'), 'hex')
  }
}

const makeLong = (primitive: number): Long => {
  const hex = primitive.toString(16)
  if (hex.length > 16) throw new Error('primitive is too big')
  return {
    code: 'N',
    value: Buffer.from(hex.padStart(16, '0'), 'hex')
  }
}

const makeSha3512Digest = (primitive: string): SHA3_512_Digest => {
  if (primitive.length !== 128) throw new Error('primitive is not the correct number of bytes')
  return {
    code: '0F',
    value: Buffer.from(primitive, 'hex')
  }
}
const makeSECPPubOrEncKey = (primitive: string): SECP_256k1_Pub_or_Enc_Key => {
  if (primitive.length !== 66) throw new Error('primitive is not the correct number of bytes')
  return {
    code: '1AAB',
    value: Buffer.from(primitive, 'hex')
  }
}

// PADDERS
const padOneByte = (binary: Buffer): Buffer => Buffer.concat([Buffer.from([0x00]), Buffer.from(binary)])
const padTwoBytes = (binary: Buffer): Buffer => Buffer.concat([Buffer.from([0x00, 0x00]), Buffer.from(binary)])
const padZeroBytes = (binary: Buffer): Buffer => binary

// INSERTERS
const insertOneCharCode = (code: TextCode) => (text: string) => code + text.substring(1)
const insertTwoCharCode = (code: TextCode) => (text: string) => code + text.substring(2)
const insertFourCharCode = (code: TextCode) => (text: string) => code + text

// UTILS
const toBase64 = (binary: Buffer): string => binary.toString('base64url')
const rawAsBuffer = (raw: [TextCode, Buffer]): Buffer => raw[1]
const trace = (label: string) => (value: any) => {
  if (LOGGING_ENABLED) console.log(label, ' => ', value)
  return value
}

// OUTERMOST MAKERS
export const makeRaw = (code: TextCode, primitive: any): Raw =>
  [code, makePrimitive(code, primitive).value] as Raw

export const makeText = (code: TextCode, primitive: any): Text =>
  R.pipe(
    makeRaw(code, primitive),
    rawAsBuffer,
    match(code.length as TextCodeSize)
      .with(1, () => padOneByte)
      .with(2, () => padTwoBytes)
      .with(4, () => padZeroBytes)
      .exhaustive(),
    toBase64,
    match(code.length as TextCodeSize)
      .with(1, () => insertOneCharCode(code))
      .with(2, () => insertTwoCharCode(code))
      .with(4, () => insertFourCharCode(code))
      .exhaustive()
  ) as Text

export const makeBinary = (code: TextCode, primitive: any): Binary =>
  Buffer.from(makeText(code, primitive), 'base64url') as Binary
