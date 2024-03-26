import { Blake2b256 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIs32Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Maker } from '../../maker.ts'

export const blake2b256: Maker = (primitive: Buffer): Blake2b256 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'F',
    raw: primitive
  }
}
