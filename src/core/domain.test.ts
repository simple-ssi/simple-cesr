import { TextCode } from './textCode'
import { Text, buildRaw, buildRawFromText, buildTextFromRaw, buildTextFromBinary, buildBinaryFromText } from './domain'

describe('Two-byte primitives:', () => {
  test('Raw', () => {
    const primitive = Buffer.from('0001', 'hex')
    const code = 'M' as TextCode
    const expected = { code, raw: primitive }
    const actual = buildRaw('M', Buffer.from('0001', 'hex'))
    expect(actual).toStrictEqual(expected)
  })
  test('Raw from Text', () => {
    const text = 'MP__' as Text
    const code = 'M' as TextCode
    const prmitive = Buffer.from('ffff', 'hex')
    const expected = { code, raw: prmitive }
    const actual = buildRawFromText(text)
    expect(actual).toStrictEqual(expected)
  })
  test('Text from Raw', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = buildRaw('M', primitive)
    const expected = 'MAAB'
    const actual = buildTextFromRaw(raw)
    expect(expected).toEqual(actual)
  })
  test('Text from Binary', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = buildRaw('M', primitive)
    const text = buildTextFromRaw(raw)
    const binary = buildBinaryFromText(text)
    const expected = 'MAAB'
    const actual = buildTextFromBinary(binary)
    expect(expected).toEqual(actual)
  })
  test('Binary', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = buildRaw('M', primitive)
    const text = buildTextFromRaw(raw)
    const expected = Buffer.from('300001', 'hex')
    const actual = buildBinaryFromText(text)
    expect(expected).toEqual(actual)
  })
})
