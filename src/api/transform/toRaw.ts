// import { match } from 'ts-pattern'
import { Binary, Raw, Text } from '../../core/domain/domains.js'
import { pipe } from '../../lib/util/pipe.js'
import { removeThreeBytes, removeOneByte, removeTwoBytes, PaddingRemover } from './lib/removeBytes.js'
import { toBytes } from './lib/toBytes.js'
import { readCodeFromString } from './lib/readCodeFromString.js'
import { toText } from './toText.js'
import { CodeLength } from '../../core/code/code.js'
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
  // return match(typeof textOrBinary)
  //   .with('string', () => textToRaw(textOrBinary as Text))
  //   .otherwise(() => binaryToRaw(textOrBinary as Binary))
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
// match(length)
// .with(1, () => removeOneByte)
// .with(2, () => removeTwoBytes)
// .with(4, () => removeThreeBytes)
// .exhaustive()
