import { Buffer } from 'buffer'
import { encodeBinary } from './encodeBinary.js'

describe('Binary encoder', () => {
  it('processes code "M" correctly', () => {
    const result = encodeBinary('M', Buffer.from([0x00, 0x01]))
    expect(result).toStrictEqual(Buffer.from([48, 0, 1])) // 48 is the base64 encoding of 'M'
  })
})
