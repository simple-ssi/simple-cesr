import { X25519 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.ts'
import { Maker } from '../../maker.ts'

export const x25519: Maker = (primitive: Buffer): X25519 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'C',
    raw: primitive
  }
}
