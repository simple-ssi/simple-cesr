import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { Blake2b512 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs64Bytes } from '../../validation/conditions/itIsNBytes.js'

export const blake2b512: Maker = (primitive: Buffer): Blake2b512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0E',
    raw: primitive
  }
}
