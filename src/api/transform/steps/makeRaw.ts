import { Code } from '../../../core/code/code.js'
import { Raw } from '../../../core/domain/raw.js'
import { make } from '../../../implementation/make.js'

export const makeRaw = (code: Code) => (primitive: Buffer): Raw => make(code, primitive)
