import { match } from 'ts-pattern'
import { Text } from '../../../core/domain/domains.ts'
import { Code } from '../../../core/code/code.ts'

const readOneCharCode = (text: Text): Code => text[0] as Code
const readTwoCharCode = (text: Text): Code => text.substring(0, 2) as Code
const readFourCharCode = (text: Text): Code => text.substring(0, 4) as Code

// extracts the code characters from the Text
// returns a transitional object to be further processed
export const readCode = (text: Text): {
  code: Code
  text: Text
} => (
  {
    // copy the correct number of characters from the Text based on first character of the Text
    code: match(
      text[0].match(/[A-Za-z]/) != null
        ? 1
        : text[0] === '0'
          ? 2
          : 4)
      .with(1, () => readOneCharCode(text))
      .with(2, () => readTwoCharCode(text))
      .with(4, () => readFourCharCode(text))
      .exhaustive(),
    text
  }
)
