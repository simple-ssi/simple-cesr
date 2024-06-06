import { Buffer } from 'buffer/index.js'
import { Ecdsa256k1Seed } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs32Bytes } from '../../validation/conditions/itIsNBytes.js'
import { Maker } from '../../maker.js'

export const ecdsa256k1Seed: Maker = (primitive: Buffer): Ecdsa256k1Seed => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'J',
    raw: primitive
  }
}
