import { Maker } from '../../maker.ts'
import { Base644CharOr3Byte as FourB64ThreeByte } from '../../../../core/primitive/primitives.ts'
import { itIsThreeBytes } from '../../lib/validate/validations/lengthIs.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'

// ECDSA public verification or encryption key, compressed
export const fourB64ThreeByte: Maker = (primitive: Buffer): FourB64ThreeByte => {
  makeSureThat(
    itIsThreeBytes(primitive)
  )
  return {
    code: '1AAF',
    raw: primitive
  }
}
