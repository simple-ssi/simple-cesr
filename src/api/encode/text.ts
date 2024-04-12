import { Buffer } from 'buffer/index.js'
import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Raw } from '../../core/domain/raw.js'
import { Text } from '../../core/domain/text.js'
import { make } from '../../implementation/make.js'
import { asText } from './lib/asText.js'

export const text = (code: Code, primitive: Uint8Array): Text => {
  const doRaw = rawWith(code) // which code should be used to make the raw?
  const doText = textWith(code) // which code should be used to encode the text?

  // requires two steps...
  return pipe(
    Buffer.from(primitive), // internally, we use Buffers
    doRaw, // make the Raw
    doText // encode the raw primitive as Text
  )
}

const rawWith = (code: Code) => (primitive: Buffer) => make(code, primitive) // need to call make() since this is where input validation happens
const textWith = (code: Code) => (tuple: Raw) => asText(code, tuple.raw)
