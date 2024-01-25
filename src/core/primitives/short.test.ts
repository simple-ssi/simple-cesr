import { buildRaw } from '../domains/raw'
import { TextCode } from '../textCode'
import { Short, buildRawShort, buildShort } from './short'

describe('Short Number', () => {
  test('Valid number of bytes', () => {
    const short = 67
    expect(buildShort(short)).toEqual(67)
  })
  test('Invalid number of bytes', () => {
    const short = 65536
    expect(() => { buildShort(short) }).toThrow()
  })
  test('Build Raw Primitive from Short', () => {
    const value = 34
    const short = buildShort(value)
    expect(buildRawShort(short)).toHaveLength(2) // should be two bytes
  })
  test.skip('Some other test with Short', () => {
    const primitive = Buffer.from('0001', 'hex')
    const code = 'M' as TextCode
    const value = 1 as Short
    const expected = [code, primitive]
    const actual = buildRaw(code, value)
    expect(actual).toStrictEqual(expected)
  })
})
