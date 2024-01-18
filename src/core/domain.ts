import { RawPrimitive, shortBuilder } from './primitive'
import { TextCode } from './textCode'
// import * as CodeTable from './codeTables/codeTable'

export type Text = string & { _type: 'text' }
export type Binary = Buffer & { _type: 'binary' }
export interface Raw { code: string, raw: Buffer }

export function buildText (raw: Raw): Text {
  // The code from the code table, which we assume to be a base64url char here
  const code = raw.code
  // The binary representation of the raw primitive
  const primitive = raw.raw
  // A single zeroed byte, we are assuming a primitive byte length that is a multiple of 2
  const zeroByte = Buffer.from('00', 'hex')
  // Prepend the primitive binary with the single zeroed byte, we are assuming a primitive byte length that is a multiple of 2
  const paddedBinary = Buffer.concat([zeroByte, primitive])
  // Replace the first character of the base64url encoded string (which contains no information about the primitive)
  // with the single code char
  return code + paddedBinary.toString('base64url').slice(1) as Text
}

export function buildBinary (text: Text): Binary {
  return Buffer.from(text, 'base64url') as Binary
}

export function buildRaw (code: TextCode, primitive: Buffer): Raw {
  const rawPrimitive: RawPrimitive = shortBuilder(primitive)
  return {
    code,
    raw: rawPrimitive
  }
}

export function textToBinary (text: Text): Binary {
  return Buffer.from(text, 'base64url') as Binary
}

export function binaryToText (binary: Binary): Text {
  return binary.toString('base64url') as Text
}
