// import { match } from 'ts-pattern'
import { Text } from '../../../core/domain/text.js'
import { Code } from '../../../core/code/code.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'

const readOneCharCode = (text: Text): Code => text[0] as Code
const readTwoCharCode = (text: Text): Code => text.substring(0, 2) as Code
const readFourCharCode = (text: Text): Code => text.substring(0, 4) as Code

// extracts the code characters from the Text
// returns a transitional object to be further processed
export const readCodeFromString = (textDomain: Text): Code => {
  const numChars = textDomain[0].match(/[A-Za-z]/) != null
    ? 1
    : textDomain[0] === '0'
      ? 2
      : 4
  switch (numChars) {
    case 1:
      return readOneCharCode(textDomain)
    case 2:
      return readTwoCharCode(textDomain)
    case 4:
      return readFourCharCode(textDomain)
  }
  return exhaustive(numChars)
}
