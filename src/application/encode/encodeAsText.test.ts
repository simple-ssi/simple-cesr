import { encodeAsText } from './encodeAsText'

describe('encodeAsText', () => {
  it('should return "MAAB" when given "M" and 1', () => {
    const result = encodeAsText('M', 1)
    expect(result).toBe('MAAB')
  })
  it('should return "NAAAAAAAAAAB" when given "N" and 1', () => {
    const result = encodeAsText('N', 1)
    expect(result).toBe('NAAAAAAAAAAB')
  })
  it('should return an 88-char string started with "0F" and padded with "A" when text code is "0F" and value is "000...".', () => {
    // create a simple hex string of 128 characters, or 64 bytes
    const hex = '0'.padStart(128, '0')
    const result = encodeAsText('0F', hex)
    const expected = '0F'.padEnd(88, 'A')
    expect(result.length).toBe(88)
    expect(result).toBe(expected)
  })
})
