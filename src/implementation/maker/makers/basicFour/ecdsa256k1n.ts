import { Maker } from '../../maker.ts'
import { PrimitiveInvalidInput } from '../../error.ts'
import { Ecdsa256k1n } from '../../../../core/primitive/primitives.ts'
import { itIs33Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Validation } from '../../lib/validate/Validation.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'

// ECDSA public verification or encryption key, compressed
export const ecdsa256k1n: Maker = (primitive: Buffer): Ecdsa256k1n => {
  makeSureThat(
    itIs33Bytes(primitive),
    andPrefixIs02or03(primitive) // convention is that the first byte in hex should be 02 or 03
  )
  return {
    code: '1AAA',
    raw: primitive
  }
}

// additional validation
const andPrefixIs02or03 = (primitive: Buffer): Validation => () => {
  const hex = primitive.toString('hex')
  if (hex.substring(0, 2) !== '02' && hex.substring(0, 2) !== '03') throw new PrimitiveInvalidInput()
  return true
}
