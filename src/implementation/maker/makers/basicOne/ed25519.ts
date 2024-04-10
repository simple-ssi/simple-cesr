import { Buffer } from 'buffer/index.js'
import { Ed25519 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.js'
import { Maker } from '../../maker.js'

export const ed25519: Maker = (primitive: Buffer): Ed25519 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'D',
    raw: primitive
  }
}
