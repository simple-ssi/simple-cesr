import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIs64Bytes } from '../../lib/validate/validations/lengthIs.ts'
import { Blake3512 } from '../../../../core/primitive/primitives.ts'

export const blake3512: Maker = (primitive: Buffer): Blake3512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0D',
    raw: primitive
  }
}
