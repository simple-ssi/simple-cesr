import { X25519Private } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.ts'
import { Maker } from '../../maker.ts'

export const x25519Private: Maker = (primitive: Buffer): X25519Private => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'O',
    raw: primitive
  }
}
