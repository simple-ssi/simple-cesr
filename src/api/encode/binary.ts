import { pipe } from '../../lib/util/pipe.js'
import { Code } from '../../core/code/code.js'
import { Binary } from '../../core/domain/binary.js'
import { toRawBytes } from './steps/toRawBytes.js'
import { text } from './text.js'

export const binary = (code: Code, primitive: Uint8Array): Binary => pipe(
  text(code, primitive),
  toRawBytes
)
