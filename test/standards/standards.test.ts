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
  matter.forEach((padSize) => {
    padSize.examples.forEach((exampleTherein) => {
      exampleTherein.values.forEach((valueFound) => {
        it(shouldEncodeRawAsText(valueFound.raw, valueFound.text), () => {
          const binary = Buffer.from(valueFound.raw, 'hex')
          expect(encodeAsText(exampleTherein.code as Code, binary)).toBe(valueFound.text)
        })
      })
    })
  })
})
