import { Maker } from '../../maker.ts'
import { PrimitiveWrongLength } from '../../error.ts'
import { Ed25519Seed } from '../../../../../core/primitive/primitives.ts'

export const makeEd25519Seed: Maker = (primitive: Buffer): Ed25519Seed => {
  if (primitive.length !== 32) throw new PrimitiveWrongLength()
  return {
    code: 'A',
    raw: primitive
  }
}
