import { Buffer } from 'buffer/index.js'

import { TheConditionToMeet } from '../theConditionToMeet.js'
import { PrimitiveWrongLength } from '../../errors/primitiveWrongLength.js'

const itIsNBytes = (length: number) => (primitive: Buffer): TheConditionToMeet => () => {
  if (primitive.length !== length) throw new PrimitiveWrongLength(length, primitive.length)
  return true
}

export const itIsTwoBytes = itIsNBytes(2)
export const itIsFourBytes = itIsNBytes(4)
export const itIsThreeBytes = itIsNBytes(3)
export const itIsEightBytes = itIsNBytes(8)
export const itIs16Bytes = itIsNBytes(16)
export const itIs32Bytes = itIsNBytes(32)
export const itIs33Bytes = itIsNBytes(33)
export const itIs39Bytes = itIsNBytes(39)
export const itIs57Bytes = itIsNBytes(57)
export const itIs64Bytes = itIsNBytes(64)
export const itIs114Bytes = itIsNBytes(114)
