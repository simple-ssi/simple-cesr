import { PrimitiveWrongLength } from '../../makePrimitive'
import { makeShort } from './short'

test('makeShort', () => {
  expect(makeShort(0).value.toString('hex')).toBe('0000')
  expect(makeShort(1).value.toString('hex')).toBe('0001')
  expect(makeShort(255).value.toString('hex')).toBe('00ff')
  expect(makeShort(256).value.toString('hex')).toBe('0100')
  expect(makeShort(65535).value.toString('hex')).toBe('ffff')
  expect(() => makeShort(65536)).toThrowError(PrimitiveWrongLength)
})
