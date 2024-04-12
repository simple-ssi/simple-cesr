import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { Sha2512 } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../validation/makeSureThat.js'
import { itIs64Bytes } from '../validation/validations/itIsXBytes.js'

export const sha2512: Maker = (primitive: Buffer): Sha2512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0G',
    raw: primitive
  }
}
