import { Buffer } from 'buffer'
import * as R from 'remeda'

// short: 0x0000
// sha512: 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
// secp256k1 public key: "04b1e3697bca6f37d93a4e7b029b751bca2a065f2a8e90f1b3ed9e1f95a51a6e3a5e28e5a280b5f24c4a05f6759ee2d907e6d56bc6f6981d62142a01db2c4e535a"

type TextCode =
'NULL' |
'M' |
'0F' |
'1AAB'

interface Short { code: 'M', value: Buffer }
interface SHA3_512_Digest { code: '0F', value: Buffer }
interface SECP_256k1_Pub_or_Enc_Key { code: '1AAB', value: any }

const Examples = {
  M: 'ffff',
  '0F': 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f',
  '1AAB': '04b1e3697bca6f37d93a4e7b029b751bca2a065f2a8e90f1b3ed9e1f95a51a6e3a5e28e5a280b5f24c4a05f6759ee2d907e6d56bc6f6981d62142a01db2c4e535a'
}

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

const insertOneCharCode = (text: string) => (code: string) => code + text.substring(1)
const insertTwoCharCode = (text: string) => (code: string) => code + text.substring(2)

const toBase64 = (binary: Buffer): string => binary.toString('base64url')

const log = (result: string): void => console.log(`${result}      ${result.length}`)

const convertOneCharCode = (primitive: Short): string => R.pipe(
  primitive.value,
  b => padOneByte(b),
  b => toBase64(b),
  s => insertOneCharCode(s),
  withCode => withCode(primitive.code)
)

const convertTwoCharCode = (primitive: SHA3_512_Digest): string => R.pipe(
  primitive.value,
  b => padTwoBytes(b),
  b => toBase64(b),
  s => insertTwoCharCode(s),
  withCode => withCode(primitive.code)
)

const code: TextCode = 'M'
const short: Short = {
  code,
  value: Buffer.from(
    Examples[code],
    'hex'
  )
}

const sha512: SHA3_512_Digest = {
  code: '0F',
  value: Buffer.from(
    Examples['0F'],
    'hex'
  )
}

const pubKey: SECP_256k1_Pub_or_Enc_Key = {
  code: '1AAB',
  value: Buffer.from(
    Examples['1AAB'],
    'hex'
  )
}

const oneCharText = convertOneCharCode(short)
log(oneCharText)

const twoCharText = convertTwoCharCode(sha512)
log(twoCharText)
