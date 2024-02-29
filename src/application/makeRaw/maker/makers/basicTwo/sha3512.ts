import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { PrimitiveWrongLength } from '../../error.ts'
import { Sha3512 } from '../../../../../core/primitive/primitives.ts'

// SHA3 512-bit digest
export const makeSha3512: Maker = (primitive: string): Sha3512 => {
  if (primitive.length !== 128) throw new PrimitiveWrongLength()
  return {
    code: '0F',
    raw: Buffer.from(primitive, 'hex')
  }
}
