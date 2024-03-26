import { Code } from '../../../core/code/code.ts'
import { Binary, Text } from '../../../core/domain/domains.ts'
import { encodeText } from './encodeText.ts'
import { make } from '../../../implementation/make.ts'
import { asText } from '../asText.ts'
import { asBinary } from '../asBinary.ts'

// encodes a primitive in the Binary domain. needs the type code and the primitive as a byte array
export const encodeBinary = (code: Code, primitive: Uint8Array): Binary => {
  // for Binary, go through all three steps...

  // make the Raw
  const tuplet = make(code, primitive)

  // encode the raw primitive as Text
  const raw = tuplet.raw
  const text = asText(code, raw)

  // return the encoded string as a Binary
  return asBinary(text)
}
