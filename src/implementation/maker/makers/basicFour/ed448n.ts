import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { Ed448n } from '../../../../core/primitive/primitives.js'
import { itIs57Bytes } from '../validation/validations/itIsXBytes.js'
import { makeSureThat } from '../validation/makeSureThat.js'

export const ed448n: Maker = (primitive: Buffer): Ed448n => {
  makeSureThat(
    itIs57Bytes(primitive)
  )
  return {
    code: '1AAC',
    raw: primitive
  }
}
