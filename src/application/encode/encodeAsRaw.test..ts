import { encodeAsRaw } from './encodeAsRaw'

describe('encodeAsRaw', () => {
  it('should return a tuple of "M" and a Two-byte Buffer', () => {
    const result = encodeAsRaw('M', 1)
    expect(result).toStrictEqual(['M', Buffer.from([0, 1])])
  })
  it('should return a tuple of "N" and an Eight-byte Buffer', () => {
    const result = encodeAsRaw('N', 1)
    expect(result).toStrictEqual(['N', Buffer.from([0, 0, 0, 0, 0, 0, 0, 1])])
  })
  it('should return a tuple of "0F" and the correct hex string as a Buffer', () => {
    // randomly generated example of SHA-256 hash
    const hex = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
    const result = encodeAsRaw('0F', hex)
    expect(result).toStrictEqual(['0F', Buffer.from(hex, 'hex')])
  })
  it('should return a tuple of "1AAB" and the correct hex string as a Buffer', () => {
    // randomly generated example of ecsda secp256k1 public key
    const hex = '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1'
    const result = encodeAsRaw('1AAB', hex)
    expect(result).toStrictEqual(['1AAB', Buffer.from(hex, 'hex')])
  })
})
