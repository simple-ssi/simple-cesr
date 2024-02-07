import { encodeAsBinary } from './encodeAsBinary'

describe('encodeAsBinary', () => {
  it('should return a Buffer', () => {
    const result = encodeAsBinary('M', 1)
    expect(result).toStrictEqual(Buffer.from([48, 0, 1]))
  })
})
