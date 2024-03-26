import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { Long } from '../../../../core/primitive/primitives.ts'
import { itIsFourBytes } from '../../lib/validate/validations/lengthIs.ts'

export const long: Maker = (primitive: Buffer): Long => {
  makeSureThat(
    itIsFourBytes(primitive)
  )
  return {
    code: '0H',
    raw: primitive
  }
}
