import { TypeCodeType } from './typeCode'
import { Raw, Text, Binary } from './domain'

describe('Two-byte primitives:', () => {
  test('Raw', () => {
    const primitive = Buffer.from('0001', 'hex')
    const code = 'M' as TypeCodeType
    const expected = { code, raw: primitive }
    const actual = Raw('short', Buffer.from('0001', 'hex'))
    expect(actual).toStrictEqual(expected)
  })
  test('Text', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = Raw('short', primitive)
    const expected = 'MAAB'
    const actual = Text(raw)
    expect(expected).toEqual(actual)
  })
  test('Binary', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = Raw('short', primitive)
    const text = Text(raw)
    const expected = Buffer.from('300001', 'hex')
    const actual = Binary(text)
    expect(expected).toEqual(actual)
  })
})
