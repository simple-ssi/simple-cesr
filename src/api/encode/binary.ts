import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Binary } from '../../core/domain/domains/binary.js'
import { convertToByteArray } from './steps/convertToByteArray.js'
import { text as makeText } from './text.js'

export const binary = (code: Code, primitive: Uint8Array): Binary => pipe(
  makeText(code, primitive),
  convertToByteArray
)
