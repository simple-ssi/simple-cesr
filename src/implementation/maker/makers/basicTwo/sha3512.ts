import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Sha3512 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs64Bytes } from '../../validation/validations/lengthIsRight.ts'

// SHA3 512-bit digest
export const sha3512: Maker = (primitive: Buffer): Sha3512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0F',
    raw: primitive
  }
}
