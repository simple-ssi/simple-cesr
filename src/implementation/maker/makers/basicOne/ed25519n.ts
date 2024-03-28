import { Ed25519n } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.js'
import { Maker } from '../../maker.js'

export const ed25519n: Maker = (primitive: Buffer): Ed25519n => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'B',
    raw: primitive
  }
}
