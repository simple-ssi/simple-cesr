import { PrimitiveInvalidInput, PrimitiveWrongLength } from '../../makePrimitive'
import { makeEcdsa256k1 } from './ecdsa256k1'

describe('makeEcdsa256k1 enforces validity', () => {
  // randomly generated example
  const example = '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1' // compressed key -> 33 bytes long
  test('check length', () => {
  // must be 33 bytes long
    expect(() => makeEcdsa256k1('0'.padEnd(67, '0'))).toThrowError(PrimitiveWrongLength)
    expect(() => makeEcdsa256k1('0'.padEnd(65, '0'))).toThrowError(PrimitiveWrongLength)
  })
  test('check prefix', () => {
  // this primitive type is meant to be a compressed public key, it must start with 0x02 or 0x03
    expect(() => makeEcdsa256k1('04' + example.substring(2))).toThrowError(PrimitiveInvalidInput)
  })
})
