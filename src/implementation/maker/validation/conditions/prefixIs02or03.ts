import { Buffer } from 'buffer/index.js'
import { PrimitiveInvalidInput } from '../../errors/primitiveInvalidInput.js'
import { TheConditionToMeet } from '../theConditionToMeet.js'

export const prefixIs02or03 = (primitive: Buffer): TheConditionToMeet => () => {
  const hex = primitive.toString('hex')
  if (hex.substring(0, 2) !== '02' && hex.substring(0, 2) !== '03') throw new PrimitiveInvalidInput()
  return true
}
