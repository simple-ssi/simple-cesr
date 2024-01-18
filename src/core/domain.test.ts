import { TextCode } from './textCode'
import { buildRaw, buildText, buildBinary } from './domain'

describe('Two-byte primitives:', () => {
  test('Raw', () => {
    const primitive = Buffer.from('0001', 'hex')
    const code = 'M' as TextCode
    const expected = { code, raw: primitive }
    const actual = buildRaw('M', Buffer.from('0001', 'hex'))
    expect(actual).toStrictEqual(expected)
  })
  test('Text', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = buildRaw('M', primitive)
    const expected = 'MAAB'
    const actual = buildText(raw)
    expect(expected).toEqual(actual)
  })
  test('Binary', () => {
    const primitive = Buffer.from('0001', 'hex')
    const raw = buildRaw('M', primitive)
    const text = buildText(raw)
    const expected = Buffer.from('300001', 'hex')
    const actual = buildBinary(text)
    expect(expected).toEqual(actual)
  })
})
