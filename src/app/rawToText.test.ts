import { Buffer } from 'buffer'

import { rawToText } from './rawToText'
import { RawPrimitive } from '../core/primitive'
import { TextCode } from '../core/textCode'
import { Raw } from '../core/domain'

describe('Raw To Text', () => {
  test('("M", 0x0000) -> "MAAA"', () => {
    const code = 'M' as TextCode
    const short = Buffer.from([0x00, 0x00]) as RawPrimitive
    const raw = [code, short] as Raw
    expect(rawToText(raw)).toEqual('MAAA')
  })
  test('("M", 0x0001) -> "MAAB"', () => {
    const code = 'M' as TextCode
    const short = Buffer.from([0x00, 0x01]) as RawPrimitive
    const raw = [code, short] as Raw
    expect(rawToText(raw)).toEqual('MAAB')
  })
  test('("M", 0xffff) -> "MP__"', () => {
    const code = 'M' as TextCode
    const short = Buffer.from([0xff, 0xff]) as RawPrimitive
    const raw = [code, short] as Raw
    expect(rawToText(raw)).toEqual('MP__')
  })
})
