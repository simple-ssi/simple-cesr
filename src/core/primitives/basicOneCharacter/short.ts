import { Buffer } from 'buffer'
import { PrimitiveWrongLength } from '../../make'

// 2-byte base-2 number
export interface Short { code: 'M', value: Buffer}

export const makeShort = (primitive: number): Short => {
  const hex = primitive.toString(16)
  // todo: how to avoid throwing an error here?
  if (hex.length > 4) throw new PrimitiveWrongLength()
  return {
    code: 'M',
    value: Buffer.from(hex.padStart(4, '0'), 'hex')
  }
}

// Stuff that should be true about this primitive
// text code is of length 1
// total encoded length (including code) is 4
// input can't be larger than 2^16 -1 (2^8+8 for a two-byte number or 65535)
// input is represented as a hex string of length 4
// should enforce via regex that input is a hex string of length 4

// Maybe checks should only happen in encodeAsText and transformToText
// In which case, transforming directly from Binary to Raw or vice versa might not be allowed
