import { Ed25519n } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { primitiveIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const makeEd25519n: Maker = (primitive: Buffer): Ed25519n => {
  makeSureThat(
    primitiveIs32Bytes(primitive)
  )
  return {
    code: 'B',
    raw: primitive
  }
}
