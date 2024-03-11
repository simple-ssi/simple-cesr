import { Buffer } from 'buffer'

import { pipe } from '../../lib/pipe.ts'
import { Code, CodeSize } from '../../core/code/code.ts'
import { Text, Raw } from '../../core/domain/domains.ts'
import { encodeAsRaw } from './encodeAsRaw.ts'

import { swapInTextCode } from '../../lib/swapper.ts'
import { padRawPrimitive } from '../../lib/padder.ts'
import { toBase64 } from '../../lib/toBase64.ts'

const extractRawPrimitive = (raw: Raw): Buffer => raw.raw

export const encodeAsText = (code: Code, primitive: Uint8Array): Text =>
  pipe(
    encodeAsRaw(code, primitive),
    extractRawPrimitive,
    padRawPrimitive(code.length as CodeSize),
    toBase64,
    swapInTextCode(code.length as CodeSize)(code)
  )
