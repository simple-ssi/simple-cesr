import { Ecdsa256k1Seed } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { primitiveIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const makeEcdsa256k1Seed: Maker = (primitive: Buffer): Ecdsa256k1Seed => {
  makeSureThat(
    primitiveIs32Bytes(primitive)
  )
  return {
    code: 'J',
    raw: primitive
  }
}
