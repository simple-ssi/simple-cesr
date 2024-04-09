import { Buffer } from 'buffer/index.js'
import { Maker } from '../../maker.js'
import { Big } from '../../../../core/primitive/primitives.js'
import { makeSureThat } from '../../validation/makeSureThat.js'
import { itIsEightBytes } from '../../validation/validations/lengthIsRight.js'

// 8-byte base-2 number
export const big: Maker = (raw: Buffer): Big => {
  // must be 8 bytes
  makeSureThat(
    itIsEightBytes(raw)
  )
  return {
    code: 'N',
    raw
  }
}
