import { buildRaw } from '../domains/raw'
import { TextCode } from '../textCode'
import { buildRawLong, buildLong } from './long'

describe('Long Number', () => {
  test('Right number of bytes', () => {
    const long = 4294967295
    expect(buildLong(long)).toEqual(4294967295)
  })
  test('Too many bytes', () => {
    const long = 4294967296
    expect(() => { buildLong(long) }).toThrow()
  })
  test('Build Raw Primitive from Long', () => {
    const value = 65536
    const long = buildLong(value)
    expect(buildRawLong(long)).toHaveLength(4) // should be four bytes
  })
  test.skip('Some other test with Long', () => {
    const primitive = Buffer.from('00000001', 'hex')
    const code = 'N' as TextCode
    const longValue = 1
    const long = buildLong(longValue)
    const expected = [code, primitive]
    const actual = buildRaw(code, long)
    expect(actual).toStrictEqual(expected)
  })
})
