import { pipe } from '../../lib/util/pipe.ts'
import { swapInTypeCode } from './encoders/lib/swapInTypeCode.ts'
import { padUpFront } from './encoders/lib/padUpFront.ts'
import { convertToBase64 } from './encoders/lib/convertToBase64.ts'
import { Code } from '../../core/code/code.ts'

export const asText = (primitive: Buffer, code: Code): string =>
  pipe(
    primitive,
    padUpFront,
    convertToBase64,
    swapInTypeCode(code)
  )
