import { Sha3256 } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const sha3256: Maker = (primitive: Buffer): Sha3256 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'H',
    raw: primitive
  }
}
