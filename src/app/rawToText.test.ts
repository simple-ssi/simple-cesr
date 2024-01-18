import { rawToText } from './rawToText'

describe('To Text', () => {
  test('("M", 0x0000) -> "MAAA"', () => {
    const short = Buffer.from([0x00, 0x00])
    expect(rawToText('M', short)).toEqual('MAAA')
  })
  test('("M", 0x0001) -> "MAAB"', () => {
    const short = Buffer.from([0x00, 0x01])
    expect(rawToText('M', short)).toEqual('MAAB')
  })
  test('("M", 0xffff) -> "MP__"', () => {
    const short = Buffer.from([0xff, 0xff])
    expect(rawToText('M', short)).toEqual('MP__')
  })
})
