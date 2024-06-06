import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { Ecdsa256k1 } from '../../../../core/primitive/primitives.js'
import { itIs33Bytes } from '../../validation/conditions/itIsNBytes.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { prefixIs02or03 } from '../../validation/conditions/prefixIs02or03.js'

export const ecdsa256k1: Maker = (primitive: Buffer): Ecdsa256k1 => {
  makeSureThat(
    itIs33Bytes(primitive),
    prefixIs02or03(primitive) // convention is that the first byte in hex should be 02 or 03
  )
  return {
    code: '1AAB',
    raw: primitive
  }
}
