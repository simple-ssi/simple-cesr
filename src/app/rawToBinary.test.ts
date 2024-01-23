import { Buffer } from 'buffer'

import rawToBinary from './rawToBinary'
import { TextCode } from '../core/textCode'
import { RawPrimitive } from '../core/primitive'
import { Raw } from '../core/representation'

describe('Raw to Binary', () => {
  test('("M", 0x0000) -> 0x300000', () => {
    const code = 'M' as TextCode
    const primitive = Buffer.from([0x00, 0x00]) as RawPrimitive
    const raw = [code, primitive] as Raw
    const expected = Buffer.from([0x30, 0x00, 0x00])
    const actual = rawToBinary(raw)
    expect(expected).toEqual(actual)
  })
  test('("M", 0x0001) -> 0x300001', () => {
    const code = 'M' as TextCode
    const primitive = Buffer.from([0x00, 0x01]) as RawPrimitive
    const raw = [code, primitive] as Raw
    const expected = Buffer.from([0x30, 0x00, 0x01])
    const actual = rawToBinary(raw)
    expect(expected).toEqual(actual)
  })
  test('("M", 0xffff) -> 0x30ffff', () => {
    const code = 'M' as TextCode
    const primitive = Buffer.from([0xff, 0xff]) as RawPrimitive
    const raw = [code, primitive] as Raw
    const expected = Buffer.from([0x30, 0xff, 0xff])
    const actual = rawToBinary(raw)
    expect(expected).toEqual(actual)
  })
})
