import { Maker } from '../../maker.ts'
import { PrimitiveInvalidInput } from '../../error.ts'
import { Ecdsa256k1 } from '../../../../../core/primitive/primitives.ts'
import { primitiveIs33Bytes } from '../../lib/validation/validations/validateLength.ts'
import { Validation } from '../../lib/validation/Validation.ts'
import { makeSureThat } from '../../lib/validation/validate.ts'

// ECDSA public verification or encryption key, compressed
export const makeEcdsa256k1: Maker = (primitive: Buffer): Ecdsa256k1 => {
  makeSureThat(
    primitiveIs33Bytes(primitive),
    andPrefixIs02or03(primitive) // convention is that the first byte in hex should be 02 or 03
  )
  return {
    code: '1AAB',
    raw: primitive
  }
}

// additional validation
const andPrefixIs02or03 = (primitive: Buffer): Validation => () => {
  const hex = primitive.toString('hex')
  if (hex.substring(0, 2) !== '02' && hex.substring(0, 2) !== '03') throw new PrimitiveInvalidInput()
  return true
}
