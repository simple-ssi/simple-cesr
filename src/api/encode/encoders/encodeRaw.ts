import { Buffer } from 'buffer'
import { make } from '../../../implementation/make.ts'
import { Code } from '../../../core/code/code.ts'
import { Raw } from '../../../core/domain/domains.ts'

export const encodeRaw = (code: Code, primitive: Uint8Array): Raw =>
  // Make a Raw
  make( // make ensures the primitive is valid
    code,
    Buffer.from(primitive)
  )
