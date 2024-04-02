import { Buffer } from 'buffer/'
import { X25519 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.js'
import { Maker } from '../../maker.js'

export const x25519: Maker = (primitive: Buffer): X25519 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'C',
    raw: primitive
  }
}
