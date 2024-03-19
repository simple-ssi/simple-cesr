import { Buffer } from 'buffer'
import { Maker } from '../../Maker.ts'
import { Short } from '../../../../../core/primitive/Primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { primitiveIsTwoBytes } from '../../lib/validate/validations/lengthIs.ts'

// 2-byte base-2 number
export const makeShort: Maker = (raw: Buffer): Short => {
  makeSureThat(
    primitiveIsTwoBytes(raw)
  )
  return {
    code: 'M',
    raw
  }
}
