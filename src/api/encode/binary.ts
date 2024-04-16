import { Buffer } from 'buffer/index.js'
import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Binary } from '../../core/domain/binary.js'
import { encodeText } from './lib/encodeText.js'
import { encodeBinary } from './lib/encodeBinary.js'
import { extractRawFromRaw } from './lib/extractRawFromRaw.js'

// encodes a primitive in the Binary domain. needs the type code and the primitive as a byte array

export const binary = (code: Code, primitive: Uint8Array): Binary => {
  // helper functions
  const makeRaw = extractRawFromRaw(code)
  const asText = encodeText(code)
  const asBinary = encodeBinary

  // for Binary, go through all three steps...
  return pipe(
    Buffer.from(primitive), // internally, we use Buffers
    makeRaw, // make the Raw
    asText, // encode the raw primitive as Text
    asBinary // return the encoded string as a Binary
  )
}
