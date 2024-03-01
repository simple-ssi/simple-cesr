import { PrimitiveWrongLength } from '../../error.ts'
import { makeEd25519Seed } from './makeEd25519Seed.ts'

describe('Ed25519Seed maker', () => {
  const example = '4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2a' // 32 bytes = 64 characters in hex
  it('makes an Ed25519Seed', () => {
    expect(makeEd25519Seed(example).code).toBe('A')
    expect(makeEd25519Seed(example).raw.toString('hex')).toBe(example)
  })
  it('checks length of hexstring', () => {
    expect(() => makeEd25519Seed(example.slice(1))).toThrow(PrimitiveWrongLength)
    expect(() => makeEd25519Seed(example + 'a')).toThrow(PrimitiveWrongLength)
  })
  it('checks for empty hexstring', () => {
    expect(() => makeEd25519Seed('')).toThrow(PrimitiveWrongLength)
  })
})
