import { Raw } from '../../../core/domain/raw.js'
import { Text } from '../../../core/domain/text.js'
import { pipe } from '../../../lib/util/pipe.js'
import { transformTextToBinary } from './transformTextToBinary.js'
import { readCodeFromText } from '../lib/readCodeFromText.js'
import { CodeLength } from '../../../core/code/codeLength.js'
import { splitIntoTuple } from '../lib/splitIntoTuple.js'
import { trimBufferBytes } from '../lib/trimBufferBytes.js'

export const transformTextToRaw = (text: Text): Raw => {
  // helper functions
  const code = readCodeFromText(text)
  const length = code.length as CodeLength
  const removeFrontPadding = trimBufferBytes(length)

  return pipe(
    text,
    transformTextToBinary,
    removeFrontPadding,
    splitIntoTuple(code)
  )
}
