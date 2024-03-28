import { Buffer } from 'buffer'
import { Maker } from '../../maker.js'
import { Sha3512 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs64Bytes } from '../../validation/validations/lengthIsRight.js'

// SHA3 512-bit digest
export const sha3512: Maker = (primitive: Buffer): Sha3512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0F',
    raw: primitive
  }
}
