import { Buffer } from 'buffer/'
import { PrimitiveWrongLength } from '../../maker.js'
import { Validation } from '../validation.js'

const lengthIsRight = (length: number) => (primitive: Buffer): Validation => () => {
  if (primitive.length !== length) throw new PrimitiveWrongLength(length, primitive.length)
  return true
}

export const itIsTwoBytes = lengthIsRight(2)
export const itIsFourBytes = lengthIsRight(4)
export const itIsThreeBytes = lengthIsRight(3)
export const itIsEightBytes = lengthIsRight(8)
export const itIs16Bytes = lengthIsRight(16)
export const itIs32Bytes = lengthIsRight(32)
export const itIs33Bytes = lengthIsRight(33)
export const itIs39Bytes = lengthIsRight(39)
export const itIs57Bytes = lengthIsRight(57)
export const itIs64Bytes = lengthIsRight(64)
export const itIs114Bytes = lengthIsRight(114)
