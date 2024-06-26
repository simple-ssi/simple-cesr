import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { Ecdsa256k1Sig } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs64Bytes } from '../../validation/conditions/itIsNBytes.js'

export const ecdsa256k1Sig: Maker = (primitive: Buffer): Ecdsa256k1Sig => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0C',
    raw: primitive
  }
}
