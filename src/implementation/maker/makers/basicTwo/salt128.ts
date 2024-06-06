import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { Salt128 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs16Bytes } from '../../validation/conditions/itIsNBytes.js'

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
