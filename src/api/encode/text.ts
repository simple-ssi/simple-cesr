import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Text } from '../../core/domain/domains/text.js'
import { make as makeRaw } from '../../implementation/make.js'
import { addPadding } from './steps/addPadding.js'
import { convertToUrlSafeBase64 } from './steps/convertToUrlSafeBase64.js'
import { swapInTextCode } from './steps/swapInTextCode.js'

export const text = (code: Code, primitive: Uint8Array): Text =>
  pipe(
    makeRaw(code, primitive)
      .raw, // call make() to ensure the primitive is valid, then re-extract the primitive
    addPadding,
    convertToUrlSafeBase64,
    swapInTextCode(code)
  )
