import { match } from 'ts-pattern'
import { Binary, Raw, Text } from '../../core/domain/domains.ts'
import { pipe } from '../../lib/util/pipe.ts'
import { removeThreeBytes, removeOneByte, removeTwoBytes, PaddingRemover } from './lib/removeBytes.ts'
import { toBytes } from './lib/toBytes.ts'
import { readCodeFromString } from './lib/readCodeFromString.ts'
import { toText } from './toText.ts'
import { CodeLength } from '../../core/code/code.ts'
import { asRaw } from './lib/asRaw.ts'

// two function signatures: Text and Binary
export function toRaw (text: Text): Raw
export function toRaw (binary: Binary): Raw

// takes either Text or Binary and returns Raw
export function toRaw (textOrBinary: Text | Binary): Raw {
  return match(typeof textOrBinary)
    .with('string', () => textToRaw(textOrBinary as Text))
    .otherwise(() => binaryToRaw(textOrBinary as Binary))
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

const howManyBytes = (length: CodeLength): PaddingRemover => match(length)
  .with(1, () => removeOneByte)
  .with(2, () => removeTwoBytes)
  .with(4, () => removeThreeBytes)
  .exhaustive()
