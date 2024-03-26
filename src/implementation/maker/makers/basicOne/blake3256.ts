import { Blake3256 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.ts'
import { Maker } from '../../maker.ts'

export const blake3256: Maker = (primitive: Buffer): Blake3256 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'E',
    raw: primitive
  }
}
