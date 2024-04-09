import { Buffer } from 'buffer/index.js'
import npmPackage, { text, raw } from './index.js'

describe('NPM package', () => {
  it('should be an object', () => {
    expect(npmPackage).toBeInstanceOf(Object)
  })

  it('should have a raw property', () => {
    expect(npmPackage).toHaveProperty('raw')
  })

  it('should have a text property', () => {
    expect(npmPackage).toHaveProperty('text')
  })

  it('should have a binary property', () => {
    expect(npmPackage).toHaveProperty('binary')
  })
})

describe('Raw encoder', () => {
  it('should be a function', () => {
    expect(raw).toBeInstanceOf(Function)
  })

  it('should encode a primitive as raw', () => {
    const result = npmPackage.raw('M', new Uint8Array([0x00, 0x01]))
    expect(result).toStrictEqual({ code: 'M', raw: Buffer.from([0x00, 0x01]) })
  })
})

describe('Text encoder', () => {
  it('should be a function', () => {
    expect(text).toBeInstanceOf(Function)
  })

  it('should encode a primitive as text', () => {
    const result = text('M', new Uint8Array([0x00, 0x01]))
    expect(result).toBe('MAAB')
  })
})

describe('Binary encoder', () => {
  it('should be a function', () => {
    expect(npmPackage.binary).toBeInstanceOf(Function)
  })

  it('should encode a primitive as binary', () => {
    const result = npmPackage.binary('M', new Uint8Array([0x00, 0x01]))
    expect(result).toStrictEqual(Buffer.from([48, 0, 1])) // 48 is the base64 encoding of 'M'
  })
})
