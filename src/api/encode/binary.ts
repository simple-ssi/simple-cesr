import { Buffer } from 'buffer/index.js'
import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Binary, Raw } from '../../core/domain/domains.js'
import { make } from '../../implementation/make.js'
import { asText } from './lib/asText.js'
import { asBinary } from './lib/asBinary.js'

// encodes a primitive in the Binary domain. needs the type code and the primitive as a byte array
export const binary = (code: Code, primitive: Uint8Array): Binary => {
  const doRaw = rawWith(code) // which code should be used to make the raw?
  const doText = textWith(code) // which code should be used to encode the text?
  const doBinary = asBinary

  // for Binary, go through all three steps...
  return pipe(
    Buffer.from(primitive), // internally, we use Buffers
    doRaw, // make the Raw
    doText, // encode the raw primitive as Text
    doBinary // return the encoded string as a Binary
  )
}

const rawWith = (code: Code) => (primitive: Buffer) => make(code, primitive)
const textWith = (code: Code) => (tuple: Raw) => asText(code, tuple.raw)
