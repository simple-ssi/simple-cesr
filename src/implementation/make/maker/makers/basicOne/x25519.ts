import { X25519 } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const x25519: Maker = (primitive: Buffer): X25519 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'C',
    raw: primitive
  }
}
