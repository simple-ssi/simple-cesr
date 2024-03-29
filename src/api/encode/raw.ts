import { Buffer } from 'buffer'
import { make } from '../../implementation/make.js'
import { Code } from '../../core/code/code.js'
import { Raw } from '../../core/domain/domains.js'

export const raw = (code: Code, primitive: Uint8Array): Raw =>
  make( // make() ensures the primitive is valid
    code,
    Buffer.from(primitive)
  )
