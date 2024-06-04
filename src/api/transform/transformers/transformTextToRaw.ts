import { Raw } from '../../../core/domain/raw.js'
import { Text } from '../../../core/domain/text.js'
import { pipe } from '../../../lib/util/pipe.js'
import { transformTextToBinary } from './transformTextToBinary.js'
import { readCodeFromText } from '../lib/readCodeFromText.js'
import { CodeLength } from '../../../core/code/codeLength.js'
import { makeIntoTuple } from '../lib/makeIntoTuple.js'
import { removeBufferBytes } from '../lib/removeBufferBytes.js'

export const transformTextToRaw = (text: Text): Raw => {
  const code = readCodeFromText(text)
  const codeLength = code.length as CodeLength
  return pipe(
    text,
    transformTextToBinary,
    removeBufferBytes(codeLength),
    makeIntoTuple(code)
  )
}
