import { Buffer } from 'buffer'

import { PrimitiveInvalidInput, PrimitiveWrongLength } from '../../makePrimitive'

// ECDSA public verification or encryption key, compressed
export interface ECDSA_256k1 { code: '1AAB', value: Buffer}

export const makeEcdsa256k1 = (primitive: string): ECDSA_256k1 => {
  if (primitive.length !== 66) throw new PrimitiveWrongLength()
  if (primitive.substring(0, 2) !== '02' && primitive.substring(0, 2) !== '03') throw new PrimitiveInvalidInput()
  return {
    code: '1AAB',
    value: Buffer.from(primitive, 'hex')
  }
}
