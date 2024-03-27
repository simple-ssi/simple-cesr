import { Buffer } from 'buffer'
import { standards } from './standards.js'
import { encodeText } from '../../src/api/encode/encoders/encodeText.js'
import { Code } from '../../src/core/code/code.js'

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
            const text = encodeText(type.code as Code, primitive)
            // the basic test is that the Text is the expected length
            expect(text.length).toBe(type.length)
            // the more specific test is that the Text matches the standard in the sample
            expect(text).toBe(sample.text)
          })
      })
    })
})
