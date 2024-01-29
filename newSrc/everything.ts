import { Buffer } from 'buffer'
import * as R from 'remeda'
import { makeShort, Short } from './core/short'

// short: 0x0000
// sha512: 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
// secp256k1 public key: "04b1e3697bca6f37d93a4e7b029b751bca2a065f2a8e90f1b3ed9e1f95a51a6e3a5e28e5a280b5f24c4a05f6759ee2d907e6d56bc6f6981d62142a01db2c4e535a"

// DOMAIN

type TextCode =
'M' |
'0F' |
'1AAB'

interface SHA3_512_Digest { code: '0F', value: Buffer }
interface SECP_256k1_Pub_or_Enc_Key { code: '1AAB', value: Buffer }

// type Primitive = Short | SHA3_512_Digest | SECP_256k1_Pub_or_Enc_Key

interface Text {
  type: 'text'
  value: string
}
interface Binary {
  type: 'binary'
  value: Buffer
}
interface Raw {
  type: 'raw'
  value: [TextCode, Buffer]
}

// type Domain = Text | Binary | Raw

// TEST EXAMPLES
const code: TextCode = 'M'
const short: Short = {
  code,
  value: Buffer.from(
    'ffff',
    'hex'
  )
}

const sha512: SHA3_512_Digest = {
  code: '0F',
  value: Buffer.from(
    'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f',
    'hex'
  )
}

const pubKey: SECP_256k1_Pub_or_Enc_Key = {
  code: '1AAB',
  value: Buffer.from(
    '04b1e3697bca6f37d93a4e7b029b751bca2a065f2a8e90f1b3ed9e1f95a51a6e3a5e28e5a280b5f24c4a05f6759ee2d907e6d56bc6f6981d62142a01db2c4e535a',
    'hex'
  )
}

// PADDERS
const padOneByte = (binary: Buffer): Buffer => Buffer.concat(
  [
    Buffer.from([0x00]),
    Buffer.from(binary)
  ]
)

const padTwoBytes = (binary: Buffer): Buffer => Buffer.concat(
  [
    Buffer.from([0x00, 0x00]),
    Buffer.from(binary)
  ]
)

// INSERTERS
const insertOneCharCode = (text: string) => (code: TextCode) => code + text.substring(1)
const insertTwoCharCode = (text: string) => (code: TextCode) => code + text.substring(2)

// UTILS
const toBase64 = (binary: Buffer): string => binary.toString('base64url')

const isBasicOneCharacterPrimitive = (code: TextCode): boolean => code === 'M'
const isBasicTwoCharacterPrimitive = (code: TextCode): boolean => code === '0F'
const isBasicFourCharacterPrimitive = (code: TextCode): boolean => code === '1AAB'

const extractTextCodeFromBinary = (binary: Buffer): TextCode => binary.toString('base64url').charAt(0) as TextCode

// CONVERT TO TEXT FUNCTIONS
const convertBasicOneCharacterCodePrimitive = (primitive: Short): Text => (
  {
    type: 'text',
    value: R.pipe(
      primitive.value,
      b => padOneByte(b),
      b => toBase64(b),
      s => insertOneCharCode(s),
      withCode => withCode(primitive.code)
    )
  }
)

const convertBasicTwoCharacterCodePrimitive = (primitive: SHA3_512_Digest): Text => (
  {
    type: 'text',
    value: R.pipe(
      primitive.value,
      b => padTwoBytes(b),
      b => toBase64(b),
      s => insertTwoCharCode(s),
      withCode => withCode(primitive.code)
    )
  }
)

export const toText = (rawOrBinary: Raw | Binary): Text => {
  switch (typeof rawOrBinary) {
    case 'object': {
      break
    }
    case 'string': {
      break
    }
    default:
      break
  }

  // convert the Buffer to cesr Text
  switch (code) {
    case 'M': return convertBasicOneCharacterCodePrimitive(short)
    // Todo: deal with default other than throwing an error
    default: throw new Error('unknown code')
  }
}

export function toRaw (text: Text): Raw
export function toRaw (binary: Binary): Raw
export function toRaw (textOrBinary: Text | Binary): Raw {
  switch (textOrBinary.type) {
    case 'text': {
      return {
        type: 'raw',
        value: ['M', Buffer.from([0x00, 0x00, 0x00, 0x02])]
      }
    }
    case 'binary': {
      const binary = textOrBinary.value
      const code = binary.toString('base64url').charAt(0) as TextCode
      console.log(code)
      const primitive = Buffer.from(binary.subarray(1))
      console.log(primitive)
      return {
        type: 'raw',
        value: [code, primitive]
      }
    }
    // todo: deal with default other than throwing an error
    default:
      throw new Error('unknown type')
  }
}

export const toBinary = (text: string): Buffer => Buffer.from(text, 'base64url')
