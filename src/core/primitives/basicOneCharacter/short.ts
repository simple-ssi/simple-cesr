import { Buffer } from 'buffer'
import { PrimitiveWrongLength } from '../../makePrimitive'

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
