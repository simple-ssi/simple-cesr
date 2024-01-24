import { Buffer } from 'buffer'

import { Text, Binary } from '../core/representation'
import textToBinary from './textToBinary'

describe('Text to Binary', () => {
  test('"MAAA" -> 0x300000', () => {
    const text = 'MAAA' as Text
    const expected = Buffer.from([0x30, 0x00, 0x00]) as Binary
    const actual = textToBinary(text)
    expect(expected).toEqual(actual)
  })
  test('"MAAB" -> 0x300001', () => {
    const text = 'MAAB' as Text
    const expected = Buffer.from([0x30, 0x00, 0x01]) as Binary
    const actual = textToBinary(text)
    expect(expected).toEqual(actual)
  })
  test('"MP__" -> 0x30ffff', () => {
    const text = 'MP__' as Text
    const expected = Buffer.from([0x30, 0xff, 0xff]) as Binary
    const actual = textToBinary(text)
    expect(expected).toEqual(actual)
  })
})
