import { Buffer } from 'buffer/index.js'
import { Sha3256 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/conditions/itIsNBytes.js'
import { Maker } from '../../maker.js'

export const sha3256: Maker = (primitive: Buffer): Sha3256 => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'H',
    raw: primitive
  }
}
