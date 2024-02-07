import { PrimitiveWrongLength } from '../../makePrimitive'
import { makeLong } from './long'

describe('makeLong enforces validity', () => {
  test('check length', () => {
  // even though eight bytes can express a value higher, we'll make sure the input is within safe limits for JavaScript
    expect(makeLong(Number.MAX_SAFE_INTEGER).value.toString('hex')).toBe('001fffffffffffff')
    expect(() => makeLong(Number.MAX_SAFE_INTEGER + 1)).toThrowError(PrimitiveWrongLength)
  })
})
