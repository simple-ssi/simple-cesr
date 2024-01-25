import { Buffer } from 'buffer'

import { Binary } from '../core/domains/binary'
import { RawPrimitive } from '../core/primitive'
import { TextCode } from '../core/textCode'
import binaryToRaw from './transformBinaryToRaw'

describe.skip('Transform Binary to Raw', () => {
  test('0x300000 -> ("M", 0x0000)', () => {
    const binary = Buffer.from([0x30, 0x00, 0x00]) as Binary
    const code = 'M' as TextCode
    const primitive = Buffer.from([0x00, 0x00]) as RawPrimitive
    const expected = [code, primitive]
    const actual = binaryToRaw(binary)
    expect(actual).toEqual(expected)
  })
  test('0x300001 -> ("M", 0x0001)', () => {
    const binary = Buffer.from([0x30, 0x00, 0x01]) as Binary
    const code = 'M' as TextCode
    const primitive = Buffer.from([0x00, 0x01]) as RawPrimitive
    const expected = [code, primitive]
    const actual = binaryToRaw(binary)
    expect(actual).toEqual(expected)
  })
  test('0x30ffff -> ("M", 0xffff)', () => {
    const binary = Buffer.from([0x30, 0xff, 0xff]) as Binary
    const code = 'M' as TextCode
    const primitive = Buffer.from([0xff, 0xff]) as RawPrimitive
    const expected = [code, primitive]
    const actual = binaryToRaw(binary)
    expect(actual).toEqual(expected)
  })
})
