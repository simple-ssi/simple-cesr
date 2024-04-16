import { Buffer } from 'buffer/index.js'
import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Text } from '../../core/domain/text.js'
import { encodeText } from './lib/encodeText.js'
import { extractRawFromRaw } from './lib/extractRawFromRaw.js'

export const text = (code: Code, primitive: Uint8Array): Text => {
  // helper functions
  const makeRaw = extractRawFromRaw(code)
  const asText = encodeText(code)

  // requires two steps...
  return pipe(
    Buffer.from(primitive), // convert bytes to Buffer -> internally, we use Buffers
    makeRaw, // make the Raw first, then...
    asText // ...encode the it as Text
  )
}
