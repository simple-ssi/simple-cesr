import { Binary } from '../../core/domain/binary.js'
import { Raw } from '../../core/domain/raw.js'
import { Text } from '../../core/domain/text.js'
import { pipe } from '../../lib/util/pipe.js'
import { removeThreeBytes, removeOneByte, removeTwoBytes, PaddingRemover } from './lib/removeXBytes.js'
import { toBytes } from './lib/toBytes.js'
import { readCodeFromString } from './lib/readCodeFromString.js'
import { toText } from './toText.js'
import { CodeLength } from '../../core/code/codeLength.js'
import { asRaw } from './lib/asRaw.js'
import { exhaustive } from '../../lib/util/exhaustive.js'

// two function signatures: Text and Binary
export function toRaw (text: Text): Raw
export function toRaw (binary: Binary): Raw

// takes either Text or Binary and returns Raw
export function toRaw (textOrBinary: Text | Binary): Raw {
  switch (typeof textOrBinary) {
    case 'string':
      return textToRaw(textOrBinary)
    default:
      return binaryToRaw(textOrBinary)
  }
}

const textToRaw = (text: Text): Raw => {
  const code = readCodeFromString(text)
  const length = code.length as CodeLength
  const removePadding = howManyBytes(length)

  return pipe(
    text,
    toBytes,
    removePadding,
    asRaw(code)
  )
}

const binaryToRaw = (binaryDomain: Binary): Raw => pipe(
  binaryDomain,
  toText,
  textToRaw
)

const howManyBytes = (length: CodeLength): PaddingRemover => {
  switch (length) {
    case 1:
      return removeOneByte
    case 2:
      return removeTwoBytes
    case 4:
      return removeThreeBytes
  }
  return exhaustive(length)
}
