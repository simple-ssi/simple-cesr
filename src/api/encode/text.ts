import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Raw, Text } from '../../core/domain/domains.js'
import { make } from '../../implementation/make.js'
import { asText } from './lib/asText.js'

export const text = (code: Code, primitive: Uint8Array): Text => {
  const doRaw = rawWith(code) // which code should be used to make the raw?
  const doText = textWith(code) // which code should be used to encode the text?

  // requires two steps...
  return pipe(
    primitive,
    doRaw, // make the Raw
    doText // encode the raw primitive as Text
  )
}

const rawWith = (code: Code) => (primitive: Uint8Array) => make(code, primitive)
const textWith = (code: Code) => (tuple: Raw) => asText(code, tuple.raw)
