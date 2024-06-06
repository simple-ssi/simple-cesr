import { Buffer } from 'buffer/index.js'
import { Blake3256 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/conditions/itIsNBytes.js'
import { Maker } from '../../maker.js'

export const blake3256: Maker = (primitive: Buffer): Blake3256 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'E',
    raw: primitive
  }
}
