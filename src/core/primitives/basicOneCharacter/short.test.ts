import { PrimitiveWrongLength } from '../../make'
import { makeShort } from './short'

describe('makeShort enforces validity', () => {
  test('check length', () => {
    expect(makeShort(65535).value.toString('hex')).toBe('ffff')
    expect(() => makeShort(65536)).toThrowError(PrimitiveWrongLength)
  })
})
