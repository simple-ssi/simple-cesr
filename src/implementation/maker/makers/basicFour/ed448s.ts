import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { itIs39Bytes } from '../validation/validations/itIsXBytes.js'
import { makeSureThat } from '../validation/makeSureThat.js'
import { Ed448s } from '../../../../core/primitive/primitives.js'

export const ed448s: Maker = (primitive: Buffer): Ed448s => {
  makeSureThat(
    itIs39Bytes(primitive)
  )
  return {
    code: '1AAE',
    raw: primitive
  }
}
