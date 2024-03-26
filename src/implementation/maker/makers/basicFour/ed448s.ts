import { Maker } from '../../maker.ts'
import { itIs39Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { Ed448s } from '../../../../core/primitive/primitives.ts'

// ECDSA public verification or encryption key, compressed
export const ed448s: Maker = (primitive: Buffer): Ed448s => {
  makeSureThat(
    itIs39Bytes(primitive)
  )
  return {
    code: '1AAE',
    raw: primitive
  }
}
