import { encodeAsRaw } from './encodeAsRaw.ts'

// to do: move the essential primitive-specific tests to the primitive-specific test files and make this test a more general test of makeRaw
describe('Raw encoder', () => {
  it("encodes a one-character primitive: 'A'", () => {
    // exmaple of 256 bit seed for ED25519 private key
    const example = '4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2a' // 32 bytes
    const result = encodeAsRaw('A', example)
    expect(result).toStrictEqual({ code: 'A', raw: Buffer.from(example, 'hex') })
  })
  it("encodes another one-character primitive: 'M'", () => {
    const result = encodeAsRaw('M', Buffer.from([0x00, 0x01]))
    expect(result).toStrictEqual({ code: 'M', raw: Buffer.from([0, 1]) })
  })
  it("encodes yet another one-character primitive: 'N'", () => {
    const result = encodeAsRaw('N', Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]))
    expect(result).toStrictEqual({ code: 'N', raw: Buffer.from([0, 0, 0, 0, 0, 0, 0, 1]) })
  })
  it("encodes a two-character primitive: '0F'", () => {
    // randomly generated example of SHA-256 hash
    const hex = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
    const result = encodeAsRaw('0F', hex)
    expect(result).toStrictEqual({ code: '0F', raw: Buffer.from(hex, 'hex') })
  })
  it("encodes a four-character primitive: '1AAB'", () => {
    // randomly generated example of ecsda secp256k1 public key
    const hex = '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1'
    const result = encodeAsRaw('1AAB', hex)
    expect(result).toStrictEqual({ code: '1AAB', raw: Buffer.from(hex, 'hex') })
  })
})
