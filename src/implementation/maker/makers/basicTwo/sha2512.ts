import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Sha2512 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs64Bytes } from '../../validation/validations/lengthIsRight.ts'

export const sha2512: Maker = (primitive: Buffer): Sha2512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0G',
    raw: primitive
  }
}
