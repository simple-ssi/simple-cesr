import { Maker } from '../../maker.ts'
import { Ed448n } from '../../../../core/primitive/primitives.ts'
import { itIs57Bytes } from '../../validation/validations/lengthIsRight.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'

export const ed448n: Maker = (primitive: Buffer): Ed448n => {
  makeSureThat(
    itIs57Bytes(primitive)
  )
  return {
    code: '1AAC',
    raw: primitive
  }
}
