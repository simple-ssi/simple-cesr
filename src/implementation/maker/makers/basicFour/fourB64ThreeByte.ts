import { Maker } from '../../maker.ts'
import { FourB64ThreeByte } from '../../../../core/primitive/primitives.ts'
import { itIsThreeBytes } from '../../validation/validations/lengthIsRight.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'

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
