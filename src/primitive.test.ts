import { Raw, Text, Binary } from './primitive'

describe('Two-byte primitives:', () => {
  test('Raw', () => {
    const primitive = Buffer.from('0001', 'hex')
    const expected = { code: 'M', raw: primitive }
    const actual = Raw(Buffer.from('0001', 'hex'), 'two-byte')
    expect(actual).toStrictEqual(expected)
  })
  test('Text', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = Raw(primitive, 'two-byte')
    const expected = 'MAAB'
    const actual = Text(raw)
    expect(expected).toEqual(actual)
  })
  test('Binary', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = Raw(primitive, 'two-byte')
    const text = Text(raw)
    const expected = Buffer.from('300001', 'hex')
    const actual = Binary(text)
    expect(expected).toEqual(actual)
  })
})
