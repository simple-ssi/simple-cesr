import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { Long } from '../../../../core/primitive/primitives.ts'
import { itIsFourBytes } from '../../validation/validations/lengthIsRight.ts'

// 4-byte base-2 number
export const long: Maker = (primitive: Buffer): Long => {
  makeSureThat(
    itIsFourBytes(primitive)
  )
  return {
    code: '0H',
    raw: primitive
  }
}
