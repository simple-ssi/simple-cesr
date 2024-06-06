import { Raw } from '../../../core/domain/domains/raw.js'
import { Text } from '../../../core/domain/domains/text.js'
import { pipe } from '../../../lib/util/pipe.js'
import { convertToByteArray } from '../steps/convertToByteArray.js'
import { readCodeFromText } from '../steps/readCodeFromText.js'
import { CodeLength } from '../../../core/code/code.js'
import { removePadding } from '../steps/removePadding.js'
import { produceTheRaw } from '../steps/produceTheRaw.js'

export const transformTextToRaw = (text: Text): Raw => {
  const code = readCodeFromText(text)
  const codeLength = code.length as CodeLength
  return pipe(
    text,
    convertToByteArray,
    removePadding(codeLength),
    produceTheRaw(code)
  )
}
