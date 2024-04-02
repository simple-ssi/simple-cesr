import { Buffer } from 'buffer/'
import { X25519Private } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.js'
import { Maker } from '../../maker.js'

export const x25519Private: Maker = (primitive: Buffer): X25519Private => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'O',
    raw: primitive
  }
}
