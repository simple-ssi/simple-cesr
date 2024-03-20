import { pipe } from '../../lib/pipe.ts'
import { Code } from '../../core/code/code.ts'
import { Text } from '../../core/domain/domains.ts'

import { swapInTextCode } from './lib/swapInTextCode.ts'
import { padUpFront } from './lib/padUpFront.ts'
import { convertToBase64 } from './lib/convertToBase64.ts'
import { encodeAsRaw } from './encodeAsRaw.ts'

export const encodeAsText = (code: Code, primitive: Uint8Array): Text => {
  const tuplet = encodeAsRaw(code, primitive) // must always encode as Raw first to ensure valid input for primitive type
  const raw = tuplet.raw
  return pipe(
    raw,
    padUpFront,
    convertToBase64,
    swapInTextCode(code)
  )
}
