import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Text } from '../../core/domain/text.js'
import { make as makeRaw } from '../../implementation/make.js'
import { prependWithZeros } from './steps/prependWithZeros.js'
import { toUrlSafeBase64 } from './steps/toUrlSafeBase64.js'
import { replacePadCharactersWithTextCode } from './steps/replacePadCharactersWithTextCode.js'

export const text = (code: Code, primitive: Uint8Array): Text =>
  pipe(
    makeRaw(code, primitive)
      .raw, // call make() to ensure the primitive is valid, then re-extract the primitive
    prependWithZeros,
    toUrlSafeBase64,
    replacePadCharactersWithTextCode(code)
  )
