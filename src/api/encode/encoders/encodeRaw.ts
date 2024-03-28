import { Buffer } from 'buffer'
import { make } from '../../../implementation/make.js'
import { Code } from '../../../core/code/code.js'
import { Raw } from '../../../core/domain/domains.js'

export const encodeRaw = (code: Code, primitive: Uint8Array): Raw =>
  // Make a Raw
  make( // make ensures the primitive is valid
    code,
    Buffer.from(primitive)
  )
