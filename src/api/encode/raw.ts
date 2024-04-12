import { Buffer } from 'buffer/index.js'
import { encodeBase64url } from '../../lib/util/encodeBase64url.js'
import { make } from '../../implementation/make.js'
import { Code } from '../../core/code/code.js'
import { Raw } from '../../core/domain/raw.js'

export const raw = (code: Code, primitive: Uint8Array): Raw =>
  make( // make() ensures the primitive is valid
    code,
    Buffer.from(primitive)
  )
const b = Buffer.from('hello')
encodeBase64url(b)
