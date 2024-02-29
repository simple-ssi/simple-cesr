import { encodeAsBinary } from './encodeAsBinary.ts'

describe('encodeAsBinary', () => {
  test('should process code "M" correctly', () => {
    const result = encodeAsBinary('M', Buffer.from([0x00, 0x01]))
    expect(result).toStrictEqual(Buffer.from([48, 0, 1])) // 48 is the base64 encoding of 'M'
  })
})
