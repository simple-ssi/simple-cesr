import { Maker } from '../../maker.ts'
import { Ed448n } from '../../../../core/primitive/primitives.ts'
import { itIs57Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'

// ECDSA public verification or encryption key, compressed
export const ed448n: Maker = (primitive: Buffer): Ed448n => {
  makeSureThat(
    itIs57Bytes(primitive)
  )
  return {
    code: '1AAC',
    raw: primitive
  }
}
