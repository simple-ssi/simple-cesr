import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Big } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validation/validate.ts'
import { primitiveIsEightBytes } from '../../lib/validation/validations/validateLength.ts'

// 8-byte base-2 number
export const makeBig: Maker = (raw: Buffer): Big => {
  // Must be 8 bytes
  makeSureThat(
    primitiveIsEightBytes(raw)
  )
  return {
    code: 'N',
    raw
  }
}
