import { Buffer } from 'buffer'

import { Binary, Raw, Text } from '../../core/domain/domains.ts'
import { encodeAsText } from '../encode/encodeAsText.ts'

export function transformToText (binary: Binary): Text
export function transformToText (raw: Raw): Text

export function transformToText (binary: Binary | Raw): Text {
  if (binary instanceof Buffer) return binary.toString('base64url')
  else return encodeAsText(binary.code, binary.raw)
}
