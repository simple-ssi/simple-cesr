import { PrimitiveWrongLength } from '../../make.ts'
import { makeBig } from './big.ts'

describe('makeBig enforces validity', () => {
  test('check length', () => {
  // even though eight bytes can express a value higher, we'll make sure the input is within safe limits for JavaScript
    expect(makeBig(Number.MAX_SAFE_INTEGER).value.toString('hex')).toBe('001fffffffffffff')
    expect(() => makeBig(Number.MAX_SAFE_INTEGER + 1)).toThrow(PrimitiveWrongLength)
  })
})
