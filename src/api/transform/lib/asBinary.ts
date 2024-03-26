import { Binary, Text } from '../../../core/domain/domains.ts'
import { Code } from '../../../core/code/code.ts'

// takes a type code and a CESR encoded string, and returns another transitional object
export const asBinary = (transitional: {
  code: Code
  text: Text
}): {
  code: Code // the type code
  raw: Binary // the full CESR encoded text string decoded to a byte array, same as a Binary
} => (
  {
    code: transitional.code,
    raw: Buffer.from(transitional.text, 'base64url')
  }
)
