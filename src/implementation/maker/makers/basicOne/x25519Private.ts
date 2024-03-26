import { X25519Private } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const x25519Private: Maker = (primitive: Buffer): X25519Private => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'O',
    raw: primitive
  }
}
