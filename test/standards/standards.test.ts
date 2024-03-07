import { Buffer } from 'buffer'
import { standards } from './standards.ts'
import { encodeAsText } from '../../src/api/encode/encodeAsText.ts'
import { Code } from '../../src/core/code/code.ts'

const matter = standards.matter

// to dedent the string literal
const shouldEncodeRawAsText = (raw: string, text: string): string => {
  return `should encode 
    ${raw}
    as 
    ${text}`
}

describe('Standards: Text Encoder', () => {
  matter.forEach((pad) => {
    pad.examples.forEach((example) => {
      example.values.forEach((value) => {
        it(shouldEncodeRawAsText(value.raw, value.text), () => {
          const binary = Buffer.from(value.raw, 'hex')
          expect(encodeAsText(example.code as Code, binary)).toBe(value.text)
        })
      })
    })
  })
  // true should be true
  // it('should be true', () => {
  //   expect(true).toBe(true)
  // })
})
