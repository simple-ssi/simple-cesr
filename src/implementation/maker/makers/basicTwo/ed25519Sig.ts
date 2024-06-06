import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIs64Bytes } from '../../validation/conditions/itIsNBytes.js'
import { Ed25519Sig } from '../../../../core/primitive/primitives.js'

// SHA3 512-bit digest
export const ed25519Sig: Maker = (primitive: Buffer): Ed25519Sig => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0B',
    raw: primitive
  }
}
