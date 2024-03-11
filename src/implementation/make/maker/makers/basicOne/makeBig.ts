import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Big } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { primitiveIsEightBytes } from '../../lib/validate/validations/lengthIs.ts'

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
