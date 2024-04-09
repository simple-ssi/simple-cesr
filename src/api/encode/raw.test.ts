import { Buffer } from 'buffer/index.js'
import { raw } from './raw.js'

describe('Raw encoder', () => {
  it('correctly encodes ["N", 1] as {code: "N", raw: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]}', () => {
    const result = raw('N', Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]))
    expect(result).toStrictEqual({ code: 'N', raw: Buffer.from([0, 0, 0, 0, 0, 0, 0, 1]) })
  })
})
