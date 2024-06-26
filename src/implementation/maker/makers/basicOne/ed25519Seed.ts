import { Buffer } from 'buffer/index.js'
import { Ed25519Seed } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { Maker } from '../../maker.js'
import { itIs32Bytes } from '../../validation/conditions/itIsNBytes.js'

export const ed25519Seed: Maker = (primitive: Buffer): Ed25519Seed => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'A',
    raw: primitive
  }
}
