import { Buffer } from 'buffer/index.js'
import { make } from '../../implementation/make.js'
import { Code } from '../../core/code/code.js'
import { Raw } from '../../core/domain/raw.js'

export const raw = (code: Code, primitive: Uint8Array): Raw =>
  make(
    code,
    Buffer.from(primitive) // internally, we use Buffers
  )
