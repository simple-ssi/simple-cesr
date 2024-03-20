import { X25519Private } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { primitiveIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const makeX25519Private: Maker = (primitive: Buffer): X25519Private => {
  makeSureThat(
    primitiveIs32Bytes(primitive)
  )
  return {
    code: 'O',
    raw: primitive
  }
}
