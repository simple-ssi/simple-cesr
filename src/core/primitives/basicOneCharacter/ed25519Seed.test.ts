import { PrimitiveWrongLength } from '../../makePrimitive'
import { makeEd25519Seed } from './ed25519Seed'

describe('makeEd25519Seed enforces validity', () => {
  test('check length', () => {
    const example = '4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2a' // 32 bytes = 64 characters in hex
    expect(makeEd25519Seed(example).value.toString('hex')).toBe(example)
    expect(() => makeEd25519Seed('')).toThrowError(PrimitiveWrongLength)
    expect(() => makeEd25519Seed('4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2')).toThrowError(PrimitiveWrongLength)
  })
})
