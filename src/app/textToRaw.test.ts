import { Text } from '../core/domain'
import { RawPrimitive } from '../core/primitive'
import { TextCode } from '../core/textCode'
import { textToRaw } from './textToRaw'

describe('Text to Raw', () => {
  test('"MAAA" -> {"M", 0x0000}', () => {
    const text = 'MAAA' as Text
    const code = 'M' as TextCode
    const raw = Buffer.from([0x00, 0x00]) as RawPrimitive
    const expected = [code, raw]
    const actual = textToRaw(text)
    expect(expected).toEqual(actual)
  })
  test('"MAAB" -> {"M", 0x0000}', () => {
    const text = 'MAAB' as Text
    const code = 'M' as TextCode
    const raw = Buffer.from([0x00, 0x01]) as RawPrimitive
    const expected = [code, raw]
    const actual = textToRaw(text)
    expect(expected).toEqual(actual)
  })
  test('"MP__" -> {"M", 0x0000}', () => {
    const text = 'MP__' as Text
    const code = 'M' as TextCode
    const raw = Buffer.from([0xff, 0xff]) as RawPrimitive
    const expected = [code, raw]
    const actual = textToRaw(text)
    expect(expected).toEqual(actual)
  })
})
