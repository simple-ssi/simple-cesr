import { Ed25519n } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.ts'
import { Maker } from '../../maker.ts'

export const ed25519n: Maker = (primitive: Buffer): Ed25519n => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'B',
    raw: primitive
  }
}
