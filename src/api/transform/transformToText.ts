import { Buffer } from 'buffer'

import { Binary, Raw, Text } from '../../core/domain/domains.ts'
import { encodeText } from '../encode/encoders/encodeText.ts'

export function transformToText (binary: Binary): Text
export function transformToText (raw: Raw): Text

export function transformToText (binaryOrRaw: Binary | Raw): Text {
  if (binaryOrRaw instanceof Buffer) return binaryOrRaw.toString('base64url')
  else return encodeText(binaryOrRaw.code, binaryOrRaw.raw)
}
