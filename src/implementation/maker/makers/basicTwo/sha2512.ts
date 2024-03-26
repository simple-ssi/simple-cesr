import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Sha2512 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIs64Bytes } from '../../lib/validate/validations/lengthIs.ts'

export const sha2512: Maker = (primitive: Buffer): Sha2512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0G',
    raw: primitive
  }
}
