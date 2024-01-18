import { rawToBinary } from './rawToBinary'

describe('Raw to Binary', () => {
  test('("M", 0x0000) -> 0x300000', () => {
    const primitive = Buffer.from([0x00, 0x00])
    const expected = Buffer.from([0x30, 0x00, 0x00])
    const actual = rawToBinary('M', primitive)
    expect(expected).toEqual(actual)
  })
  test('("M", 0x0001) -> 0x300001', () => {
    const primitive = Buffer.from([0x00, 0x01])
    const expected = Buffer.from([0x30, 0x00, 0x01])
    const actual = rawToBinary('M', primitive)
    expect(expected).toEqual(actual)
  })
  test('("M", 0xffff) -> 0x30ffff', () => {
    const primitive = Buffer.from([0xff, 0xff])
    const expected = Buffer.from([0x30, 0xff, 0xff])
    const actual = rawToBinary('M', primitive)
    expect(expected).toEqual(actual)
  })
})
