import { Buffer } from 'buffer'
import { encodeRaw } from './encodeRaw.js'

describe('Raw encoder', () => {
  it("encodes a one-character primitive: 'A'", () => {
    // exmaple of 256 bit seed for ED25519 private key
    const binary = Buffer.from('4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2a', 'hex') // 32 bytes
    const result = encodeRaw('A', binary)
    expect(result).toStrictEqual({ code: 'A', raw: binary })
  })
  it("encodes another one-character primitive: 'M'", () => {
    const result = encodeRaw('M', Buffer.from([0x00, 0x01]))
    expect(result).toStrictEqual({ code: 'M', raw: Buffer.from([0, 1]) })
  })
  it("encodes yet another one-character primitive: 'N'", () => {
    const result = encodeRaw('N', Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]))
    expect(result).toStrictEqual({ code: 'N', raw: Buffer.from([0, 0, 0, 0, 0, 0, 0, 1]) })
  })
  it("encodes a two-character primitive: '0F'", () => {
    // randomly generated example of SHA-256 hash
    const binary = Buffer.from('ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f', 'hex')
    const result = encodeRaw('0F', binary)
    expect(result).toStrictEqual({ code: '0F', raw: binary })
  })
  it("encodes a four-character primitive: '1AAB'", () => {
    // randomly generated example of ecsda secp256k1 public key
    const binary = Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    const result = encodeRaw('1AAB', binary)
    expect(result).toStrictEqual({ code: '1AAB', raw: binary })
  })
})
