import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Blake2b512 } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs64Bytes } from '../../validation/validations/lengthIsRight.ts'

export const blake2b512: Maker = (primitive: Buffer): Blake2b512 => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0E',
    raw: primitive
  }
}
