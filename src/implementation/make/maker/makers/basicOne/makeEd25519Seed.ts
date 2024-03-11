import { Maker } from '../../maker.ts'
import { Ed25519Seed } from '../../../../../core/primitive/primitives.ts'
import { primitiveIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'

export const makeEd25519Seed: Maker = (primitive: Buffer): Ed25519Seed => {
  makeSureThat(
    primitiveIs32Bytes(primitive)
  )
  return {
    code: 'A',
    raw: primitive
  }
}
