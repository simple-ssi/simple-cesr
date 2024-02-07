import { Buffer } from 'buffer'
import { PrimitiveWrongLength } from '../../makePrimitive'

export interface Long { code: 'N', value: Buffer}

// NOTE: The CESR spec indicates that code 'N' is for 4-byte numbers, but that would require a two-character code.
// for now, I'm assuming that the spec is wrong and that 'N' is for 8-byte numbers.
export const makeLong = (primitive: number): Long => {
  // Don't take anything higher than Javascript's maximum safe integer
  if (primitive > Number.MAX_SAFE_INTEGER) throw new PrimitiveWrongLength()
  const hex = primitive.toString(16)
  return {
    code: 'N',
    value: Buffer.from(hex.padStart(16, '0'), 'hex')
  }
}
