import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { makeSureThat } from '../validation/makeSureThat.js'
import { itIs64Bytes } from '../validation/validations/itIsXBytes.js'
import { Blake3512 } from '../../../../core/primitive/primitives.js'

export const blake3512: Maker = (primitive: Buffer): Blake3512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0D',
    raw: primitive
  }
}
