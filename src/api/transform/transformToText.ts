import { Buffer } from 'buffer'

import { Binary, Raw, Text } from '../../core/domain/domains.ts'
import { encodeAsText } from '../encode/encodeAsText.ts'

export function transformToText (binary: Binary): Text
export function transformToText (raw: Raw): Text

export function transformToText (binaryOrRaw: Binary | Raw): Text {
  if (binaryOrRaw instanceof Buffer) return binaryOrRaw.toString('base64url')
  else return encodeAsText(binaryOrRaw.code, binaryOrRaw.raw)
}
