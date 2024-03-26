import { match } from 'ts-pattern'
import { Binary, Raw, Text } from '../../core/domain/domains.ts'
import { pipe } from '../../lib/util/pipe.ts'
import { removePadding } from './lib/removePadding.ts'
import { asBinary } from './lib/asBinary.ts'
import { readCodeFromString } from './lib/readCodeFromString.ts'
import { toText } from './toText.ts'

// two function signatures: Text and Binary
export function toRaw (text: Text): Raw
export function toRaw (binary: Binary): Raw

// takes either Text or Binary and returns Raw
export function toRaw (textOrBinary: Text | Binary): Raw {
  return match(typeof textOrBinary)
    .with('string', () => textToRaw(textOrBinary as Text))
    .otherwise(() => binaryToRaw(textOrBinary as Binary))
}

const textToRaw = (textDomain: Text): Raw => {
  const code = readCodeFromString(textDomain)
  return pipe(
    textDomain,
    readCodeFromString,
    asBinary,
    removePadding
  )
}

const binaryToRaw = (binaryDomain: Binary): Raw => pipe(
  binaryDomain,
  toText,
  textToRaw
)
