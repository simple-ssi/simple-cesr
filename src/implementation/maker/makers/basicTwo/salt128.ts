import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Salt128 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs16Bytes } from '../../validation/validations/lengthIsRight.ts'

// SHA3 512-bit digest
export const salt128: Maker = (primitive: Buffer): Salt128 => {
  makeSureThat(
    itIs16Bytes(primitive)
  )
  return {
    code: '0A',
    raw: primitive
  }
}
