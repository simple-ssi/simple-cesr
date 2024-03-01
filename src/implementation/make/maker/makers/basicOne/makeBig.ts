import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { PrimitiveWrongLength } from '../../error.ts'
import { Big } from '../../../../../core/primitive/primitives.ts'

// 8-byte base-2 number
export const makeBig: Maker = (raw: Buffer): Big => {
  // Must be 8 bytes
  if (raw.length !== 8) throw new PrimitiveWrongLength()
  return {
    code: 'N',
    raw
  }
}
