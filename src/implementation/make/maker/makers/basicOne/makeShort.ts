import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { PrimitiveWrongLength } from '../../error.ts'
import { Short } from '../../../../../core/primitive/primitives.ts'

// 2-byte base-2 number
export const makeShort: Maker = (raw: Buffer): Short => {
  if (raw.length !== 2) throw new PrimitiveWrongLength()
  return {
    code: 'M',
    raw
  }
}
