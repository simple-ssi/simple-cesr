import { makeRaw } from '../../application/makeRaw/makeRaw.ts'
import { Code } from '../../core/code/code.ts'
import { Raw } from '../../core/domain/domains.ts'

export const encodeAsRaw = (code: Code, primitive: any): Raw => makeRaw(code, primitive)