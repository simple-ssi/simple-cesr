import { Maker } from '../../maker.ts'
import { itIs39Bytes } from '../../validation/validations/lengthIsRight.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { Ed448s } from '../../../../core/primitive/primitives.ts'

export const ed448s: Maker = (primitive: Buffer): Ed448s => {
  makeSureThat(
    itIs39Bytes(primitive)
  )
  return {
    code: '1AAE',
    raw: primitive
  }
}
