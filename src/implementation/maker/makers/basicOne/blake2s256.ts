import { Buffer } from 'buffer/index.js'
import { Blake2s256 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/conditions/itIsNBytes.js'
import { Maker } from '../../maker.js'

export const blake2s256: Maker = (primitive: Buffer): Blake2s256 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'G',
    raw: primitive
  }
}
