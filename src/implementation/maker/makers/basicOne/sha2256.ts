import { Buffer } from 'buffer/index.js'
import { Sha2256 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.js'
import { Maker } from '../../maker.js'

export const sha2256: Maker = (primitive: Buffer): Sha2256 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'I',
    raw: primitive
  }
}
