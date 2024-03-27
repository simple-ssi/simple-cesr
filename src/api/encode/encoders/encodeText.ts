import { Code } from '../../../core/code/code.js'
import { Text } from '../../../core/domain/domains.js'

import { make } from '../../../implementation/make.js'
import { asText } from '../asText.js'

export const encodeText = (code: Code, primitive: Uint8Array): Text => {
  // requires two steps...

  // make the Raw
  const tuplet = make(code, primitive)

  // encode the raw primitive as Text
  const raw = tuplet.raw
  return asText(code, raw)
}
