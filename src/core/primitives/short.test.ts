import { buildRawShort, buildShort } from './short'

describe('Short Number', () => {
  describe('Build Short Number', () => {
    test('Valid number of bytes', () => {
      const short = 67
      expect(buildShort(short)).toEqual(67)
    })
    test('Invalid number of bytes', () => {
      const short = 65536
      expect(() => { buildShort(short) }).toThrow()
    })
  })
  test('Build Raw Primitive from Short', () => {
    const value = 34
    const short = buildShort(value)
    expect(buildRawShort(short)).toHaveLength(2) // should be two bytes
  })
})
