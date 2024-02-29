import { PrimitiveInvalidInput, PrimitiveWrongLength } from '../../error.ts'
import { makeEcdsa256k1 } from './makeEcdsa256k1.ts'

describe('Ecdsa256k1 maker', () => {
  const example = '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1' // compressed key -> 33 bytes long
  it('makes an Ecdsa256k1', () => {
    const actual = makeEcdsa256k1(example)
    expect(actual.code).toBe('1AAB')
    expect(actual.raw.toString('hex')).toBe(example)
  })
  // randomly generated example
  it('checks length', () => {
    // must be 33 bytes long
    expect(() => makeEcdsa256k1('0'.padEnd(67, '0'))).toThrow(PrimitiveWrongLength)
    expect(() => makeEcdsa256k1('0'.padEnd(65, '0'))).toThrow(PrimitiveWrongLength)
  })
  it('checks prefix', () => {
    // this primitive type is meant to be a compressed public key, it must start with 0x02 or 0x03
    expect(() => makeEcdsa256k1('04' + example.substring(2))).toThrow(PrimitiveInvalidInput)
  })
})
