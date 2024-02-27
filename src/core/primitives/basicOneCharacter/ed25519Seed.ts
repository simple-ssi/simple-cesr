import { PrimitiveWrongLength } from '../../make.ts'

export interface Ed25519Seed { code: 'A', value: Buffer }

export const makeEd25519Seed = (primitive: string): Ed25519Seed => {
  if (primitive.length !== 64) throw new PrimitiveWrongLength()
  return {
    code: 'A',
    value: Buffer.from(primitive, 'hex')
  }
}
