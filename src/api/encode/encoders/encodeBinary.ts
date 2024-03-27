import { Code } from '../../../core/code/code.js'
import { Binary } from '../../../core/domain/domains.js'
import { make } from '../../../implementation/make.js'
import { asText } from '../asText.js'
import { asBinary } from '../asBinary.js'

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
