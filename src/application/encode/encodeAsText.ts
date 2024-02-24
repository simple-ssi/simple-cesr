import { Buffer } from 'buffer'
import * as R from 'remeda'

import { Code, CodeSize } from '../../core/code'
import { Text } from '../../core/domains/text'
import { encodeAsRaw } from './encodeAsRaw'
import { Raw } from '../../core/domains/raw'

import { trace } from '../../util/trace'
import { swapInTextCode } from '../../util/swapper'
import { padRawPrimitive } from '../../util/padder'
import { toBase64 } from '../../util/toBase64'

const extractRawPrimitive = (raw: Raw): Buffer => raw[1]

export const encodeAsText = (code: Code, primitive: any): Text =>
  R.pipe(
    encodeAsRaw(code, primitive),
    extractRawPrimitive,
    padRawPrimitive(code.length as CodeSize),
    toBase64,
    swapInTextCode(code.length as CodeSize)(code)
  ) as Text
