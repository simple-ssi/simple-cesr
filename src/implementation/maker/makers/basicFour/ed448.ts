import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { itIs57Bytes } from '../../validation/conditions/itIsNBytes.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { Ed448 } from '../../../../core/primitive/primitives.js'

export const ed448: Maker = (primitive: Buffer): Ed448 => {
  makeSureThat(
    itIs57Bytes(primitive)
  )
  return {
    code: '1AAD',
    raw: primitive
  }
}
