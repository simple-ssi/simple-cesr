import { match } from 'ts-pattern'
import { Text } from '../../../core/domain/domains.ts'
import { Code } from '../../../core/code/code.ts'

const readOneCharCode = (text: Text): Code => text[0] as Code
const readTwoCharCode = (text: Text): Code => text.substring(0, 2) as Code
const readFourCharCode = (text: Text): Code => text.substring(0, 4) as Code

// extracts the code characters from the Text
// returns a transitional object to be further processed
export const readCodeFromString = (textDomain: Text): {
  code: Code // the type code
  text: Text // the full CESR encoded text string
} => (
  {
    // we know how long the type code will be by reading the first character and applying the code table rules from the KERI spec...
    code: match(
      // read the correct number of starting characters...this will be the type code
      textDomain[0].match(/[A-Za-z]/) != null
        ? 1
        : textDomain[0] === '0'
          ? 2
          : 4)
      .with(1, () => readOneCharCode(textDomain))
      .with(2, () => readTwoCharCode(textDomain))
      .with(4, () => readFourCharCode(textDomain))
      .exhaustive(),
    text: textDomain
  }
)
