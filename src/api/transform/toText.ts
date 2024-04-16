import { Buffer } from 'buffer/index.js'

import { Binary } from '../../core/domain/binary.js'
import { Raw } from '../../core/domain/raw.js'
import { Text } from '../../core/domain/text.js'
import { text } from '../encode/text.js'
import { bytesToBase64URL } from '../../lib/util/base64/bytesToBase64URL.js'

export function toText (binary: Binary): Text
export function toText (raw: Raw): Text

export function toText (binaryOrRaw: Binary | Raw): Text {
  if (binaryOrRaw instanceof Buffer) return bytesToBase64URL(binaryOrRaw)
  else return text(binaryOrRaw.code, binaryOrRaw.raw)
}
