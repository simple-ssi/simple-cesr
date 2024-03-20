import { Sha2256 } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { primitiveIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const makeSha2256: Maker = (primitive: Buffer): Sha2256 => {
  makeSureThat(
    primitiveIs32Bytes(primitive)
  )
  return {
    code: 'I',
    raw: primitive
  }
}
