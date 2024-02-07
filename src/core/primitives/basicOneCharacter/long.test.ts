import { PrimitiveWrongLength } from '../../makePrimitive'
import { makeLong } from './long'

test('makeLong', () => {
  expect(makeLong(0).value.toString('hex')).toBe('0000000000000000')
  expect(makeLong(1).value.toString('hex')).toBe('0000000000000001')
  expect(makeLong(255).value.toString('hex')).toBe('00000000000000ff')
  expect(makeLong(256).value.toString('hex')).toBe('0000000000000100')
  expect(makeLong(65535).value.toString('hex')).toBe('000000000000ffff')
  expect(makeLong(65536).value.toString('hex')).toBe('0000000000010000')
  // even though eight bytes can express a value higher, we'll make sure the input is within safe limits for JavaScript
  expect(makeLong(Number.MAX_SAFE_INTEGER).value.toString('hex')).toBe('001fffffffffffff')
  expect(() => makeLong(Number.MAX_SAFE_INTEGER + 1)).toThrowError(PrimitiveWrongLength)
})
