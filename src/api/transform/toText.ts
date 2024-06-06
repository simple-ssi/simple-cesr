import { Buffer } from 'buffer/index.js'

import { Binary } from '../../core/domain/domains/binary.js'
import { Raw } from '../../core/domain/domains/raw.js'
import { Text } from '../../core/domain/domains/text.js'
import { transformBinaryToText } from './transformers/transformBinaryToText.js'
import { transformRawToText } from './transformers/transformRawToText.js'

// two function signatures: Binary and Raw
export function toText (binary: Binary): Text
export function toText (raw: Raw): Text

export function toText (binaryOrRaw: Binary | Raw): Text {
  return (
    (binaryOrRaw instanceof Buffer)
      ? transformBinaryToText(binaryOrRaw) // if it's a Buffer it's in Binary form
      : transformRawToText(binaryOrRaw) // otherwise it's in Raw form
  )
}
