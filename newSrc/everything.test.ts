import { makeBinary, makeRaw, makeText } from './everything'

describe('makeRaw', () => {
  it('should return a tuple of "M" and a Two-byte Buffer', () => {
    const result = makeRaw('M', 1)
    expect(result).toStrictEqual(['M', Buffer.from([0x00, 0x01])])
  })
  it('should return a tuple of "N" and an Eight-byte Buffer', () => {
    const result = makeRaw('N', 1)
    expect(result).toStrictEqual(['N', Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01])])
  })
  it('should return a tuple of "0F" and the correct hex string as a Buffer', () => {
    // randomly generated example of SHA-256 hash
    const hex = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
    const result = makeRaw('0F', hex)
    expect(result).toStrictEqual(['0F', Buffer.from(hex, 'hex')])
  })
  it('should return a tuple of "1AAB" and the correct hex string as a Buffer', () => {
    // randomly generated example of ecsda secp256k1 public key
    const hex = '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1'
    const result = makeRaw('1AAB', hex)
    expect(result).toStrictEqual(['1AAB', Buffer.from(hex, 'hex')])
  })
})

describe('makeText', () => {
  it('should return "MAAB" when given "M" and 1', () => {
    const result = makeText('M', 1)
    expect(result).toBe('MAAB')
  })
  it('should return "NAAAAAAAAAAB" when given "N" and 1', () => {
    const result = makeText('N', 1)
    expect(result).toBe('NAAAAAAAAAAB')
  })
  it('should return an 88-char string started with "0F" and padded with "A" when text code is "0F" and value is "000...".', () => {
    // create a simple hex string of 128 characters, or 64 bytes
    const hex = '0'.padStart(128, '0')
    const result = makeText('0F', hex)
    const expected = '0F'.padEnd(88, 'A')
    expect(result.length).toBe(88)
    expect(result).toBe(expected)
  })
})

describe('makeBinary', () => {
  it('should return a Buffer', () => {
    const result = makeBinary('M', 1)
    expect(result).toStrictEqual(Buffer.from([0x30, 0x00, 0x01]))
  })
})
