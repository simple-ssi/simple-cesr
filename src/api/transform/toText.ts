import { Buffer } from 'buffer'

import { Binary, Raw, Text } from '../../core/domain/domains.ts'
import { encodeText } from '../encode/encoders/encodeText.ts'

export function toText (binary: Binary): Text
export function toText (raw: Raw): Text

export function toText (binaryOrRaw: Binary | Raw): Text {
  if (binaryOrRaw instanceof Buffer) return binaryOrRaw.toString('base64url')
  else return encodeText(binaryOrRaw.code, binaryOrRaw.raw)
}
