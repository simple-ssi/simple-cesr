import { Buffer } from 'buffer/index.js'
import { base64UrlToBuffer } from './base64UrlToBuffer.js'

describe('Base64Url decoder', () => {
  it('can decode a string back into a buffer', () => {
    const base64url = 'PDw_Pz8-Pg' // encoded string that has both relevant characters, '_' and '-', included
    const expected = Buffer.from('<<???>>') // produced by encoded string with both relevant characters, '_' and '-', included
    const decoded = base64UrlToBuffer(base64url)
    expect(decoded).toEqual(expected)
  })
})
