import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs64Bytes } from '../../validation/validations/lengthIsRight.ts'
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
