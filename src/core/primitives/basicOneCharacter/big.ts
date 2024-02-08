import { Buffer } from 'buffer'
import { PrimitiveWrongLength } from '../../makePrimitive'

// 8-byte base-2 number
export interface Big { code: 'N', value: Buffer}

// to do: the expectation is that I'm working with a base-2 number, but I'm not sure how to enforce that.
// should I convert the input? or should I expect the input to be in base-2? Does this help me mor effectively
// deal with large numbers in JavaScript?
export const makeBig = (primitive: number): Big => {
  // Don't take anything higher than Javascript's maximum safe integer
  if (primitive > Number.MAX_SAFE_INTEGER) throw new PrimitiveWrongLength()
  const hex = primitive.toString(16)
  return {
    code: 'N',
    value: Buffer.from(hex.padStart(16, '0'), 'hex')
  }
}
