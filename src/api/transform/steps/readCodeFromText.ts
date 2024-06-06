// import { match } from 'ts-pattern'
import { Text } from '../../../core/domain/domains/text.js'
import { Code } from '../../../core/code/code.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'
import { Selector } from '../../../core/selector/selector.js'

const readOneCharCode = (text: Text): Code => text[0] as Code
const readTwoCharCode = (text: Text): Code => text.substring(0, 2) as Code
const readFourCharCode = (text: Text): Code => text.substring(0, 4) as Code

// reads the code characters from the Text
export const readCodeFromText = (text: Text): Code => {
  const selector = text[0] as Selector
  return selector !== '0' && selector !== '1'
    ? readOneCharCode(text)
    : selector === '0'
      ? readTwoCharCode(text)
      : selector === '1'
        ? readFourCharCode(text)
        : exhaustive(selector)
}
