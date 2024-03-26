import { Maker } from '../../maker.ts'
import { itIs57Bytes } from '../../validation/validations/lengthIsRight.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { Ed448 } from '../../../../core/primitive/primitives.ts'

export const ed448: Maker = (primitive: Buffer): Ed448 => {
  makeSureThat(
    itIs57Bytes(primitive)
  )
  return {
    code: '1AAD',
    raw: primitive
  }
}
