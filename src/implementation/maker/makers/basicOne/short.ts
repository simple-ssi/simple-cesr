import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Short } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIsTwoBytes } from '../../validation/validations/lengthIsRight.ts'

// 2-byte base-2 number
export const short: Maker = (raw: Buffer): Short => {
  makeSureThat(
    itIsTwoBytes(raw)
  )
  return {
    code: 'M',
    raw
  }
}
