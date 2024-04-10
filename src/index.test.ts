import { Buffer } from 'buffer/index.js'
import npmPackage, { raw, text, binary, toRaw, toText, toBinary } from './index.js'

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

  it('should have a toRaw property', () => {
    expect(npmPackage).toHaveProperty('toRaw')
  })

  it('should have a toText property', () => {
    expect(npmPackage).toHaveProperty('toText')
  })

  it('should have a toBinary property', () => {
    expect(npmPackage).toHaveProperty('toBinary')
  })
})

describe('Exported raw encoder', () => {
  it('should be a function', () => {
    expect(raw).toBeInstanceOf(Function)
  })

  it('should encode a primitive as raw', () => {
    const result = npmPackage.raw('M', new Uint8Array([0x00, 0x01]))
    expect(result).toStrictEqual({ code: 'M', raw: Buffer.from([0x00, 0x01]) })
  })
})

describe('Exported text encoder', () => {
  it('should be a function', () => {
    expect(text).toBeInstanceOf(Function)
  })

  it('should encode a primitive as text', () => {
    const result = text('M', new Uint8Array([0x00, 0x01]))
    expect(result).toBe('MAAB')
  })
})

describe('Exported binary encoder', () => {
  it('should be a function', () => {
    expect(binary).toBeInstanceOf(Function)
  })

  it('should encode a primitive as binary', () => {
    const result = binary('M', new Uint8Array([0x00, 0x01]))
    expect(result).toStrictEqual(Buffer.from([48, 0, 1])) // 48 is the base64 encoding of 'M'
  })
})

describe('Exported raw transformer', () => {
  it('should be a function', () => {
    expect(toRaw).toBeInstanceOf(Function)
  })

  it('should transform a text to raw', () => {
    const T = text('M', new Uint8Array([0x00, 0x01]))
    const R = raw('M', new Uint8Array([0x00, 0x01]))
    const result = toRaw(T)
    expect(result).toStrictEqual(R)
  })

  it('should transform a binary to raw', () => {
    const B = binary('M', new Uint8Array([0x00, 0x01]))
    const R = raw('M', new Uint8Array([0x00, 0x01]))
    const result = toRaw(B)
    expect(result).toStrictEqual(R)
  })
})

describe('Exported text transformer', () => {
  it('should be a function', () => {
    expect(toText).toBeInstanceOf(Function)
  })

  it('should transform a binary to text', () => {
    const T = text('M', new Uint8Array([0x00, 0x01]))
    const B = binary('M', new Uint8Array([0x00, 0x01]))
    const result = toText(B)
    expect(result).toStrictEqual(T)
  })

  it('should transform a raw to text', () => {
    const T = text('M', new Uint8Array([0x00, 0x01]))
    const R = raw('M', new Uint8Array([0x00, 0x01]))
    const result = toText(R)
    expect(result).toStrictEqual(T)
  })
})

describe('Exported binary transformer', () => {
  it('should be a function', () => {
    expect(toBinary).toBeInstanceOf(Function)
  })

  it('should transform a text to binary', () => {
    const T = text('M', new Uint8Array([0x00, 0x01]))
    const B = binary('M', new Uint8Array([0x00, 0x01]))
    const result = toBinary(T)
    expect(result).toStrictEqual(B)
  })

  it('should transform a raw to binary', () => {
    const R = raw('M', new Uint8Array([0x00, 0x01]))
    const B = binary('M', new Uint8Array([0x00, 0x01]))
    const result = toBinary(R)
    expect(result).toStrictEqual(B)
  })
})
