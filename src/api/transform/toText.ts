import { Buffer } from 'buffer/index.js'

import { Binary, Raw, Text } from '../../core/domain/domains.js'
import { text } from '../encode/text.js'
import { encodeBase64url } from '../../lib/util/encodeBase64url.js'

export function toText (binary: Binary): Text
export function toText (raw: Raw): Text

export function toText (binaryOrRaw: Binary | Raw): Text {
  if (binaryOrRaw instanceof Buffer) return encodeBase64url(binaryOrRaw)
  else return text(binaryOrRaw.code, binaryOrRaw.raw)
}
