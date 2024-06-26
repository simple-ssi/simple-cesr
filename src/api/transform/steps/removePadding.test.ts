import { Buffer } from 'buffer/index.js'
import { removePadding } from './removePadding.js'

describe('Trim Bytes', () => {
  it('handles code length of one', () => {
    const trimOneByte = removePadding(1)
    const bin = Buffer.from([0x30, 0x00, 0x01])
    const actual = trimOneByte(bin)
    expect(actual).toStrictEqual(Buffer.from([0x00, 0x01]))
  })
  it('handles code length of two', () => {
    const trimTwoBytes = removePadding(2)
    const bin = Buffer.from([0xd0, 0x70, 0x00, 0x00, 0x00, 0x01])
    const actual = trimTwoBytes(bin)
    expect(actual).toStrictEqual(Buffer.from([0x00, 0x00, 0x00, 0x01]))
  })
  it('handles code length of four', () => {
    const trimThreeBytes = removePadding(4)
    const bin = Buffer.from([0xd4, 0x00, 0x05, 0x00, 0x00, 0x01])
    const actual = trimThreeBytes(bin)
    expect(actual).toStrictEqual(Buffer.from([0x00, 0x00, 0x01]))
  })
})
