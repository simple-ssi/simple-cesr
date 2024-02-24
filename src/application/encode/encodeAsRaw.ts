import { make } from '../../core/make'
import { Code } from '../../core/code'
import { Raw } from '../../core/domains/raw'

export const encodeAsRaw = (code: Code, primitive: any): Raw =>
  [code, make(code, primitive).value] as Raw
