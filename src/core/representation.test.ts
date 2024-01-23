import { TextCode } from './textCode'
import { Text, buildRaw, buildRawFromText, buildTextFromRaw, buildTextFromBinary, buildBinaryFromText } from './representation'
import { Short, buildShort } from './primitives/short'
import { buildLong } from './primitives/long'

describe('Representation Builders:', () => {
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
  test('Build Text from Raw', () => {
    const shortValue = 1
    const short = buildShort(shortValue)
    const raw = buildRaw('M', short)
    const expected = 'MAAB'
    const actual = buildTextFromRaw(raw)
    expect(expected).toEqual(actual)
  })
  test('Build Text from Binary', () => {
    const shortValue = 1
    const short = buildShort(shortValue)
    const raw = buildRaw('M', short)
    const text = buildTextFromRaw(raw)
    const binary = buildBinaryFromText(text)
    const expected = 'MAAB'
    const actual = buildTextFromBinary(binary)
    expect(expected).toEqual(actual)
  })
  test('Build Binary from Text', () => {
    const shortValue = 1
    const short = buildShort(shortValue)
    const raw = buildRaw('M', short)
    const text = buildTextFromRaw(raw)
    const expected = Buffer.from('300001', 'hex')
    const actual = buildBinaryFromText(text)
    expect(expected).toEqual(actual)
  })
})

describe('Build Raw for all Types', () => {
  test('Short', () => {
    const primitive = Buffer.from('0001', 'hex')
    const code = 'M' as TextCode
    const value = 1 as Short
    const expected = [code, primitive]
    const actual = buildRaw(code, value)
    expect(actual).toStrictEqual(expected)
  })
  test('Long', () => {
    const primitive = Buffer.from('00000001', 'hex')
    const code = 'N' as TextCode
    const longValue = 1
    const long = buildLong(longValue)
    const expected = [code, primitive]
    const actual = buildRaw(code, long)
    expect(actual).toStrictEqual(expected)
  })
})
