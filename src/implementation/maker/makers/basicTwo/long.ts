import { Buffer } from 'buffer/'
import { Maker } from '../../maker.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { Long } from '../../../../core/primitive/primitives.js'
import { itIsFourBytes } from '../../validation/validations/lengthIsRight.js'

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
