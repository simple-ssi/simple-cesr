import { Buffer } from 'buffer'
import { PrimitiveWrongLength } from '../../makePrimitive'

export interface Sha3512Digest { code: '0F', value: Buffer}

export const makeSha3512Digest = (primitive: string): Sha3512Digest => {
  if (primitive.length !== 128) throw new PrimitiveWrongLength()
  return {
    code: '0F',
    value: Buffer.from(primitive, 'hex')
  }
}
