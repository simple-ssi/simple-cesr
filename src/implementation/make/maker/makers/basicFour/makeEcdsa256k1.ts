import { Maker } from '../../maker.ts'
import { PrimitiveInvalidInput, PrimitiveWrongLength } from '../../error.ts'
import { Ecdsa256k1 } from '../../../../../core/primitive/primitives.ts'
import { validateLengthIs33Bytes } from '../../validation/validations/validateLength.ts'
import { Validation } from '../../validation/Validation.ts'
import { validate } from '../../validation/validate.ts'

const validatePefix = (primitive: Buffer): Validation => () => {
  const hex = primitive.toString('hex')
  if (hex.substring(0, 2) !== '02' && hex.substring(0, 2) !== '03') throw new PrimitiveInvalidInput()
  return true
}

// ECDSA public verification or encryption key, compressed
export const makeEcdsa256k1: Maker = (primitive: Buffer): Ecdsa256k1 => {
  const primitiveIsOfCorrectLength = validateLengthIs33Bytes(primitive)
  const andPrefixIsCorrect = validatePefix(primitive)

  validate(
    primitiveIsOfCorrectLength,
    andPrefixIsCorrect // convention is that the first byte in hex should be 02 or 03
  )

  return {
    code: '1AAB',
    raw: primitive
  }
}
