import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Big } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIsEightBytes } from '../../validation/validations/lengthIsRight.ts'

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
