import { Ed25519Seed } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs32Bytes } from '../../validation/validations/lengthIsRight.ts'
import { Maker } from '../../maker.ts'

export const ed25519Seed: Maker = (primitive: Buffer): Ed25519Seed => {
  makeSureThat(
    itIs32Bytes(primitive)
  )
  return {
    code: 'A',
    raw: primitive
  }
}
