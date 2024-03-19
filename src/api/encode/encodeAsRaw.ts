import { make } from '../../implementation/make/make.ts'
import { Code } from '../../core/code/Code.ts'
import { Raw } from '../../core/domain/Domains.ts'

export const encodeAsRaw = (code: Code, primitive: Uint8Array): Raw =>
  // Calls make() to ensure proper validation occurs before returning the result
  make(
    code,
    Buffer.from(primitive)
  )
