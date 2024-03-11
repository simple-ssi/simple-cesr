import { PrimitiveWrongLength } from '../../../error.ts'
import { Validation } from '../Validation.ts'

const lengthIs = (length: number) => (primitive: Buffer): Validation => () => {
  if (primitive.length !== length) throw new PrimitiveWrongLength()
  return true
}

export const primitiveIsTwoBytes = lengthIs(2)
export const primitiveIsEightBytes = lengthIs(8)
export const primitiveIs32Bytes = lengthIs(32)
export const primitiveIs33Bytes = lengthIs(33)
export const primitiveIs64Bytes = lengthIs(64)
