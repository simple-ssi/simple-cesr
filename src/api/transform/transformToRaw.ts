import { match } from 'ts-pattern'
import { Binary, Raw, Text } from '../../core/domain/Domains.ts'
import { pipe } from '../../lib/pipe.ts'
import { removePadding } from './lib/removePadding.ts'
import { decodeRaw } from './lib/decodeRaw.ts'
import { readCode } from './lib/readCode.ts'
import { transformToText } from './transformToText.ts'

// two function signatures: Text and Binary
export function transformToRaw (text: Text): Raw
export function transformToRaw (binary: Binary): Raw

export function transformToRaw (textOrBinary: Text | Binary): Raw {
  return match(typeof textOrBinary)
    .with('string', () => transformTextToRaw(textOrBinary as Text))
    .otherwise(() => transformBinaryToRaw(textOrBinary as Binary))
}

const transformTextToRaw = (text: Text): Raw => pipe(
  text,
  readCode,
  decodeRaw,
  removePadding
)

const transformBinaryToRaw = (binary: Binary): Raw => pipe(
  binary,
  transformToText,
  transformTextToRaw
)
