import { TextCode } from './textCode'
import { Text, buildRaw, buildRawFromText, buildTextFromRaw, buildTextFromBinary, buildBinaryFromText } from './representation'
import { Short } from './primitives/short'

describe('Domain Builders:', () => {
  test('Build Raw', () => {
    const primitive = Buffer.from('0001', 'hex')
    const code = 'M' as TextCode
    const value = 1 as Short
    const expected = [code, primitive]
    const actual = buildRaw('M', value)
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
    const value = 1
    const raw = buildRaw('M', value)
    const expected = 'MAAB'
    const actual = buildTextFromRaw(raw)
    expect(expected).toEqual(actual)
  })
  test('Build Text from Binary', () => {
    const value = 1
    const raw = buildRaw('M', value)
    const text = buildTextFromRaw(raw)
    const binary = buildBinaryFromText(text)
    const expected = 'MAAB'
    const actual = buildTextFromBinary(binary)
    expect(expected).toEqual(actual)
  })
  test('Build Binary from Text', () => {
    const value = 1
    const raw = buildRaw('M', value)
    const text = buildTextFromRaw(raw)
    const expected = Buffer.from('300001', 'hex')
    const actual = buildBinaryFromText(text)
    expect(expected).toEqual(actual)
  })
})
