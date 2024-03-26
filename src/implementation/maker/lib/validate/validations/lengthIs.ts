import { PrimitiveWrongLength } from '../../../error.ts'
import { Validation } from '../Validation.ts'

const lengthIs = (length: number) => (primitive: Buffer): Validation => () => {
  if (primitive.length !== length) throw new PrimitiveWrongLength(length, primitive.length)
  return true
}

export const itIsTwoBytes = lengthIs(2)
export const itIsFourBytes = lengthIs(4)
export const itIsThreeBytes = lengthIs(3)
export const itIsEightBytes = lengthIs(8)
export const itIs16Bytes = lengthIs(16)
export const itIs32Bytes = lengthIs(32)
export const itIs33Bytes = lengthIs(33)
export const itIs39Bytes = lengthIs(39)
export const itIs57Bytes = lengthIs(57)
export const itIs64Bytes = lengthIs(64)
export const itIs114Bytes = lengthIs(114)
