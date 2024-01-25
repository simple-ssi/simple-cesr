import { buildShort } from '../primitives/short'
import { TextCode } from '../textCode'
import { buildRaw, buildRawFromText } from './raw'
import { Text } from './text'

describe('Raw Domain', () => {
  test('Build Raw', () => {
    const primitive = Buffer.from('0001', 'hex')
    const code = 'M' as TextCode
    const shortValue = 1
    const short = buildShort(shortValue)
    const expected = [code, primitive]
    const actual = buildRaw(code, short)
    expect(actual).toStrictEqual(expected)
  })
  test('Build Raw from Text', () => {
    const text = 'MP__' as Text
    const code = 'M' as TextCode
    const prmitive = Buffer.from('ffff', 'hex')
    const expected = [code, prmitive]
    const actual = buildRawFromText(text)
    expect(actual).toStrictEqual(expected)
  })
})
