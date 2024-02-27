import { encodeAsRaw } from './encodeAsRaw.ts'

// to do: move the essential primitive-specific tests to the primitive-specific test files and make this test a more general test of makeRaw
describe('encodeAsRaw: one character codes', () => {
  it('should process code "A" correctly', () => {
    // exmaple of 256 bit seed for ED25519 private key
    const example = '4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2a' // 32 bytes
    const result = encodeAsRaw('A', example)
    expect(result).toStrictEqual(['A', Buffer.from(example, 'hex')])
  })
  it('should process code "M" correctly', () => {
    const result = encodeAsRaw('M', 1)
    expect(result).toStrictEqual(['M', Buffer.from([0, 1])])
  })
  it('should process code "N" correctly', () => {
    const result = encodeAsRaw('N', 1)
    expect(result).toStrictEqual(['N', Buffer.from([0, 0, 0, 0, 0, 0, 0, 1])])
  })
})

describe('encodeAsRaw: two character codes', () => {
  it('should process code "0F" correctly', () => {
    // randomly generated example of SHA-256 hash
    const hex = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
    const result = encodeAsRaw('0F', hex)
    expect(result).toStrictEqual(['0F', Buffer.from(hex, 'hex')])
  })
})

describe('encodeAsRaw: four character codes', () => {
  it('should process code "1AAB" correctly', () => {
    // randomly generated example of ecsda secp256k1 public key
    const hex = '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1'
    const result = encodeAsRaw('1AAB', hex)
    expect(result).toStrictEqual(['1AAB', Buffer.from(hex, 'hex')])
  })
})
