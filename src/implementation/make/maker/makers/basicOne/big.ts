import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Big } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIsEightBytes } from '../../lib/validate/validations/lengthIs.ts'

// 8-byte base-2 number
export const big: Maker = (raw: Buffer): Big => {
  // Must be 8 bytes
  makeSureThat(
    itIsEightBytes(raw)
  )
  return {
    code: 'N',
    raw
  }
}
