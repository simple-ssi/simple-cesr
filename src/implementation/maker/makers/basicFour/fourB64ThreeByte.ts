import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { FourB64ThreeByte } from '../../../../core/primitive/primitives.js'
import { itIsThreeBytes } from '../../validation/validations/lengthIsRight.js'
import { makeSureThat } from '../../validation/makeSureThat.js'

// four Base64 characters or a 3-byte base-2 number
export const fourB64ThreeByte: Maker = (primitive: Buffer): FourB64ThreeByte => {
  makeSureThat(
    itIsThreeBytes(primitive)
  )
  return {
    code: '1AAF',
    raw: primitive
  }
}
