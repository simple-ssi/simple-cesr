import { encodeAsBinary } from './encodeAsBinary'

describe('encodeAsBinary', () => {
  test('should process code "M" correctly', () => {
    const result = encodeAsBinary('M', 1)
    expect(result).toStrictEqual(Buffer.from([48, 0, 1]))
  })
})
