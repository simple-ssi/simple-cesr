import { Sha3256 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.ts'
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
