import * as cesr from './api.js'

describe('API', () => {
  it('works...', () => {
    const code = 'M'
    const primitive = new Uint8Array([0, 1])
    expect(() => cesr.raw(code, primitive)).not.toThrow()
    expect(() => cesr.text(code, primitive)).not.toThrow()
    expect(() => cesr.binary(code, primitive)).not.toThrow()
    const raw = cesr.raw(code, primitive)
    const text = cesr.text(code, primitive)
    const binary = cesr.binary(code, primitive)
    expect(() => cesr.toRaw(text)).not.toThrow()
    expect(() => cesr.toRaw(binary)).not.toThrow()
    expect(() => cesr.toText(binary)).not.toThrow()
    expect(() => cesr.toText(raw)).not.toThrow()
    expect(() => cesr.toBinary(raw)).not.toThrow()
    expect(() => cesr.toBinary(text)).not.toThrow()
  })
})
