import { Buffer } from 'buffer'

import { RawPrimitive } from './primitive'
import { buildRawShort, buildShort } from './primitives/short'
import { TextCode } from './textCode'

export type Text = string & { _type: 'text' }
export type Binary = Buffer & { _type: 'binary' }
export type Raw = [TextCode, RawPrimitive] & { _type: 'raw' }

export const buildRaw = (code: TextCode, primitive: any): Raw => {
  if (code === 'M') {
    const short = buildShort(primitive)
    const rawPrimitive = buildRawShort(short)
    return [code, rawPrimitive] as Raw
  } else {
    throw new Error('Invalid Text Code.')
  }
}

export const buildRawFromText = (text: Text): Raw => {
  const code = text.charAt(0) as TextCode

  const paddedBinary = Buffer.from(text, 'base64url')
  // Assumes a two-byte primitive
  // TO DO: use calculatePadSize to handle %1 and %3
  const primitive = Buffer.from(
    paddedBinary
      .toString('hex')
      .slice(2),
    'hex'
  ) as RawPrimitive

  return [code, primitive] as Raw
}

export const buildTextFromRaw = (raw: Raw): Text => {
  // The code from the code table, which we assume to be a base64url char here
  const code: TextCode = raw[0]
  // The binary representation of the raw primitive
  const primitive = raw[1]
  // A single zeroed byte, we are assuming a primitive byte length that is a multiple of 2
  // TO DO: use calculatePadSize to handle %1 and %3 instances
  const zeroByte = Buffer.from('00', 'hex')
  // Prepend the primitive binary with the single zeroed byte, we are assuming a primitive byte length that is a multiple of 2
  // TO DO: use calculatePadSize to handle %1 and %3 instances
  const paddedBinary = Buffer.concat([zeroByte, primitive])
  // Replace the first character of the base64url encoded string (which contains no information about the primitive)
  // with the single code char
  return code + paddedBinary.toString('base64url').slice(1) as Text
}

// Sort of like an overload of `buildText()`...
export const buildTextFromBinary = (binary: Binary): Text => {
  return binary.toString('base64url') as Text
}

export const buildBinaryFromText = (text: Text): Binary => {
  return Buffer.from(text, 'base64url') as Binary
}
