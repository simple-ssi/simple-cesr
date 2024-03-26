import { Ecdsa256k1Seed } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const ecdsa256k1Seed: Maker = (primitive: Buffer): Ecdsa256k1Seed => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'J',
    raw: primitive
  }
}
