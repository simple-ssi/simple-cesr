import { Buffer } from 'buffer/index.js'
import { Blake2b256 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/conditions/itIsNBytes.js'
import { Maker } from '../../maker.js'

export const blake2b256: Maker = (primitive: Buffer): Blake2b256 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'F',
    raw: primitive
  }
}
