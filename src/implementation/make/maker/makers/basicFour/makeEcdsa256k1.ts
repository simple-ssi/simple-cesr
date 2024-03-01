import { Maker } from '../../maker.ts'
import { PrimitiveInvalidInput, PrimitiveWrongLength } from '../../error.ts'
import { Ecdsa256k1 } from '../../../../../core/primitive/primitives.ts'

// ECDSA public verification or encryption key, compressed
// convention is that the first byte in hex should be 02 or 03
export const makeEcdsa256k1: Maker = (primitive: string): Ecdsa256k1 => {
  if (primitive.length !== 66) throw new PrimitiveWrongLength()
  if (primitive.substring(0, 2) !== '02' && primitive.substring(0, 2) !== '03') throw new PrimitiveInvalidInput()
  return {
    code: '1AAB',
    raw: Buffer.from(primitive, 'hex')
  }
}
