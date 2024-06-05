import { Raw } from '../../../core/domain/raw.js'
import { Text } from '../../../core/domain/text.js'
import { pipe } from '../../../lib/util/pipe.js'
import { toByteArray } from '../steps/toByteArray.js'
import { readCodeFromText } from '../steps/readCodeFromText.js'
import { CodeLength } from '../../../core/code/codeLength.js'
import { removePaddingBytes } from '../steps/removePaddingBytes.js'
import { makeRaw } from '../steps/makeRaw.js'

export const transformTextToRaw = (text: Text): Raw => {
  const code = readCodeFromText(text)
  const codeLength = code.length as CodeLength
  return pipe(
    text,
    toByteArray,
    removePaddingBytes(codeLength),
    makeRaw(code)
  )
}
