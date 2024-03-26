import { Buffer } from 'buffer'
import { standards } from './standards.ts'
import { encodeAsText } from '../../src/api/encode/encodeAsText.ts'
import { Code } from '../../src/core/code/code.ts'

// Test is only against Matter output for now
const matter = standards.matter

describe('Standards test => ', () => {
  matter
    .forEach((type) => {
      const code = type.code
      // test each sample from Matter grouped by type code
      test(code, () => {
        type.samples
          .forEach((sample) => {
            // convert the raw hex string to a Buffer, the form expected by the encoder
            const primitive = Buffer.from(sample.raw, 'hex')
            // encode the Buffer as Text
            const text = encodeAsText(type.code as Code, primitive)
            // the basic test is that the Text is the expected length
            expect(text.length).toBe(type.length)
            // the more specific test is that the Text matches the standard in the sample
            expect(text).toBe(sample.text)
          })
      })
    })
})
