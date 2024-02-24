import { Buffer } from 'buffer'
import { PrimitiveWrongLength } from '../../make'

// SHA3 512-bit digest
export interface SHA3_512 { code: '0F', value: Buffer}

export const makeSha3x512 = (primitive: string): SHA3_512 => {
  if (primitive.length !== 128) throw new PrimitiveWrongLength()
  return {
    code: '0F',
    value: Buffer.from(primitive, 'hex')
  }
}
