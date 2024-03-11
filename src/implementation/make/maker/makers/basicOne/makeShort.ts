import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Short } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validation/validate.ts'
import { primitiveIsTwoBytes } from '../../lib/validation/validations/validateLength.ts'

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
