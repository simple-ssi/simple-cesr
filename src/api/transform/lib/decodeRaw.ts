import { Text } from '../../../core/domain/Domains.ts'
import { Code } from '../../../core/code/Code.ts'

// takes a transitional object and returns a new object with the same code and a new raw Buffer with padding intact
export const decodeRaw = (transitional: {
  code: Code
  text: Text
}): {
  code: Code
  raw: Buffer
} => (
  {
    code: transitional.code,
    raw: Buffer.from(transitional.text, 'base64url')
  }
)
