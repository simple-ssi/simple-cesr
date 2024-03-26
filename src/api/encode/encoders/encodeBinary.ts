import { Buffer } from 'buffer'
import { Code } from '../../../core/code/code.ts'
import { Binary } from '../../../core/domain/domains.ts'
import { encodeText } from './encodeText.ts'
import { make } from '../../../implementation/make.ts'
import { asText } from '../asText.ts'

export const encodeBinary = (code: Code, primitive: Uint8Array): Binary => {
  // for Binary, go through all three steps...

  // make the Raw
  const tuplet = make(code, primitive)

  // encode the raw primitive as Text
  const raw = tuplet.raw
  asText(raw, code)

  // return the encoded string as a Binary
  return Buffer.from(
    encodeText(code, primitive),
    'base64url'
  )
}
