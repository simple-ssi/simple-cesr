import { make } from '../../core/make.ts'
import { Code } from '../../core/code.ts'
import { Raw } from '../../core/domains/raw.ts'

export const encodeAsRaw = (code: Code, primitive: any): Raw =>
  [code, make(code, primitive).value] as Raw
