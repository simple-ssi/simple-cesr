import { Ed25519 } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { primitiveIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const makeEd25519: Maker = (primitive: Buffer): Ed25519 => {
  makeSureThat(
    primitiveIs32Bytes(primitive)
  )
  return {
    code: 'D',
    raw: primitive
  }
}
