import { make } from '../../implementation/make/make.ts'
import { Code } from '../../core/code/code.ts'
import { Raw } from '../../core/domain/domains.ts'

export const encodeAsRaw = (code: Code, primitive: Uint8Array): Raw => make(code, Buffer.from(primitive))
