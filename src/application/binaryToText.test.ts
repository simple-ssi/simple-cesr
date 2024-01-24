import { Buffer } from 'buffer'

import { Binary } from '../core/representation'
import binaryToText from './binaryToText'

describe('Binary to Text', () => {
  test('0x300000 -> "MAAA"', () => {
    const binary = Buffer.from([0x30, 0x00, 0x00]) as Binary
    const expected = 'MAAA'
    const actual = binaryToText(binary)
    expect(actual).toEqual(expected)
  })
  test('0x300001 -> "MAAB"', () => {
    const binary = Buffer.from([0x30, 0x00, 0x01]) as Binary
    const expected = 'MAAB'
    const actual = binaryToText(binary)
    expect(actual).toEqual(expected)
  })
  test('0x30ffff -> "MP__"', () => {
    const binary = Buffer.from([0x30, 0xff, 0xff]) as Binary
    const expected = 'MP__'
    const actual = binaryToText(binary)
    expect(actual).toEqual(expected)
  })
})
