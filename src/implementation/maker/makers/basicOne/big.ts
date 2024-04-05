import { Buffer } from 'buffer/'
import { Maker } from '../../maker'
import { Big } from '../../../../core/primitive/primitives'
import { makeSureThat } from '../../validation/makeSureThat'
import { itIsEightBytes } from '../../validation/validations/lengthIsRight'

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
