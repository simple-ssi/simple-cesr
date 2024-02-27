import { PrimitiveWrongLength } from '../../make.ts'
import { makeShort } from './short.ts'

describe('makeShort enforces validity', () => {
  test('check length', () => {
    expect(makeShort(65535).value.toString('hex')).toBe('ffff')
    expect(() => makeShort(65536)).toThrow(PrimitiveWrongLength)
  })
})
