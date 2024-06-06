import { Binary } from '../../core/domain/domains/binary.js'
import { Raw } from '../../core/domain/domains/raw.js'
import { Text } from '../../core/domain/domains/text.js'
import { transformRawToBinary } from './transformers/transformRawToBinary.js'
import { transformTextToBinary } from './transformers/transformTextToBinary.js'

// two function signatures: Text and Raw
export function toBinary (text: Text): Binary
export function toBinary (Raw: Raw): Binary

export function toBinary (textOrRaw: Text | Raw): Binary {
  return (
    (typeof textOrRaw === 'string')
      ? transformTextToBinary(textOrRaw) // if it's a string it's in Text form
      : transformRawToBinary(textOrRaw) // otherwise it's in Raw form
  )
}
