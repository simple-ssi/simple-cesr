import * as cesr from './api.js'

describe('API', () => {
  it('works...', () => {
    const code = 'M'
    const primitive = new Uint8Array([0, 1])
    expect(() => cesr.encodeRaw(code, primitive)).not.toThrow()
    expect(() => cesr.encodeText(code, primitive)).not.toThrow()
    expect(() => cesr.encodeBinary(code, primitive)).not.toThrow()
    const raw = cesr.encodeRaw(code, primitive)
    const text = cesr.encodeText(code, primitive)
    const binary = cesr.encodeBinary(code, primitive)
    expect(() => cesr.toRaw(text)).not.toThrow()
    expect(() => cesr.toRaw(binary)).not.toThrow()
    expect(() => cesr.toText(binary)).not.toThrow()
    expect(() => cesr.toText(raw)).not.toThrow()
    expect(() => cesr.toBinary(raw)).not.toThrow()
    expect(() => cesr.toBinary(text)).not.toThrow()
  })
})
