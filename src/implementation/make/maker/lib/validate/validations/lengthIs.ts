import { PrimitiveWrongLength } from '../../../error.ts'
import { Validation } from '../Validation.ts'

const lengthIs = (length: number) => (primitive: Buffer): Validation => () => {
  if (primitive.length !== length) throw new PrimitiveWrongLength()
  return true
}

export const itIsTwoBytes = lengthIs(2)
export const itIsEightBytes = lengthIs(8)
export const itIs16Bytes = lengthIs(16)
export const itIs32Bytes = lengthIs(32)
export const itIs33Bytes = lengthIs(33)
export const itIs64Bytes = lengthIs(64)
