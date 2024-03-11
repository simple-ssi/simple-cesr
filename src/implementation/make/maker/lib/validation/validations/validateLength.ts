import { PrimitiveWrongLength } from '../../../error.ts'
import { Validation } from '../Validation.ts'

const validateLength = (length: number) => (primitive: Buffer): Validation => () => {
  if (primitive.length !== length) throw new PrimitiveWrongLength()
  return true
}

export const primitiveIsTwoBytes = validateLength(2)
export const primitiveIsEightBytes = validateLength(8)
export const primitiveIs32Bytes = validateLength(32)
export const primitiveIs33Bytes = validateLength(33)
export const primitiveIs64Bytes = validateLength(64)
