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

// Stuff that should be true about this primitive
// text code is of length 1
// total encoded length (including code) is 4
// input can't be larger than 2^16 -1 (2^8+8 for a two-byte number or 65535)
// input is represented as a hex string of length 4
// should enforce via regex that input is a hex string of length 4
