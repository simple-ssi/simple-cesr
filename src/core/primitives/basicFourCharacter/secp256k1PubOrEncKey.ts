import { Buffer } from 'buffer'

import { PrimitiveInvalidInput, PrimitiveWrongLength } from '../../makePrimitive'

export interface Secp256k1PubOrEncKey { code: '1AAB', value: Buffer}

export const makeSecp256k1PubOrEncKey = (primitive: string): Secp256k1PubOrEncKey => {
  if (primitive.length !== 66) throw new PrimitiveWrongLength()
  if (primitive.substring(0, 2) !== '02' && primitive.substring(0, 2) !== '03') throw new PrimitiveInvalidInput()
  return {
    code: '1AAB',
    value: Buffer.from(primitive, 'hex')
  }
}
