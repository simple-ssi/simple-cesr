import { Buffer } from 'buffer/index.js'
import { Maker, PrimitiveInvalidInput } from '../../maker.js'
import { Ecdsa256k1 } from '../../../../core/primitive/primitives.js'
import { itIs33Bytes } from '../../validation/validations/lengthIsRight.js'
import { Validation } from '../../validation/validation.js'
import { makeSureThat } from '../../validation/makeSureThat.js'

export const ecdsa256k1: Maker = (primitive: Buffer): Ecdsa256k1 => {
  makeSureThat(
    itIs33Bytes(primitive),
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
