import { Code } from '../../../core/code/code.ts'
import { Text } from '../../../core/domain/domains.ts'

import { make } from '../../../implementation/make.ts'
import { asText } from '../asText.ts'

export const encodeText = (code: Code, primitive: Uint8Array): Text => {
  // requires two steps...

  // make the Raw
  const tuplet = make(code, primitive)

  // encode the raw primitive as Text
  const raw = tuplet.raw
  return asText(raw, code)
}
