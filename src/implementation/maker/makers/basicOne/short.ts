import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { Short } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIsTwoBytes } from '../../validation/validations/lengthIsRight.js'

// 2-byte base-2 number
export const short: Maker = (raw: Buffer): Short => {
  makeSureThat(
    itIsTwoBytes(raw)
  )
  return {
    code: 'M',
    raw
  }
}
