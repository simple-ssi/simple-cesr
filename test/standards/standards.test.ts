import { standards } from './standards.ts'
import { encodeAsText } from '../../src/api/encode/encodeAsText.ts'
import { Code } from '../../src/core/code/code.ts'

const matter = standards.matter

describe('Standards', () => {
  matter.forEach((pad) => {
    pad.examples.forEach((example) => {
      example.values.forEach((value) => {
        it(`should encode ${value.raw}... as ${value.text}`, () => {
          expect(encodeAsText(example.code as Code, value.raw)).toBe(value.text)
        })
      })
    })
  })
})
