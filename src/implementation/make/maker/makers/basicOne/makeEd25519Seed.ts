import { Maker } from '../../maker.ts'
import { PrimitiveWrongLength } from '../../error.ts'
import { Ed25519Seed } from '../../../../../core/primitive/primitives.ts'

export const makeEd25519Seed: Maker = (primitive: string): Ed25519Seed => {
  if (primitive.length !== 64) throw new PrimitiveWrongLength()
  return {
    code: 'A',
    raw: Buffer.from(primitive, 'hex')
  }
}
