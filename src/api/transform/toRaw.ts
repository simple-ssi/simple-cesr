import { Binary } from '../../core/domain/binary.js'
import { Raw } from '../../core/domain/raw.js'
import { Text } from '../../core/domain/text.js'
import { transformTextToRaw } from './transformers/transformTextToRaw.js'
import { transformBinaryToRaw } from './transformers/transformBinaryToRaw.js'

// two function signatures: Text and Binary
export function toRaw (text: Text): Raw
export function toRaw (binary: Binary): Raw

// takes either Text or Binary and returns Raw
export function toRaw (textOrBinary: Text | Binary): Raw {
  return (
    (typeof textOrBinary === 'string')
      ? transformTextToRaw(textOrBinary) // if it's a string it's in Text form
      : transformBinaryToRaw(textOrBinary) // otherwise it's in Binary form
  )
}
