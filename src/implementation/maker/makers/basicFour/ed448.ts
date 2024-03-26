import { Maker } from '../../maker.ts'
import { itIs57Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { Ed448 } from '../../../../core/primitive/primitives.ts'

// ECDSA public verification or encryption key, compressed
export const ed448: Maker = (primitive: Buffer): Ed448 => {
  makeSureThat(
    itIs57Bytes(primitive) // seems like it should be 57 bytes, no?
  )
  return {
    code: '1AAD',
    raw: primitive
  }
}
