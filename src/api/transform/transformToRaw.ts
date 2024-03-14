import { match } from 'ts-pattern'
import { Binary, Raw, Text } from '../../core/domain/domains.ts'
import { Code } from '../../core/code/code.ts'

const textToRaw = (text: Text): Raw => {
  console.log(`ACTUAL: input ${text}`)
  // the size of the code can be determined by the first character
  // use this information to extract the code
  const code: Code =
    // if the first character is a letter, the code is one character long
    text[0].match(/[A-Za-z]/) != null
      ? text[0] as Code
    // if the first letter is a 0, the code is two characters long
      : text[0] === '0'
        ? text.slice(0, 2) as Code
      // otherwise, the first letter is a 1, and the code is four characters long
        : text.slice(0, 4) as Code

  console.log(`ACTUAL: code ${code}`)
  // replace code with zeros
  // const subString = text.slice(code.length).padStart(text.length + code.length, 'A')
  const subString = text
  console.log(`ACTUAL: subString ${subString}`)

  // convert this value to a buffer from base64url
  const buffer = Buffer.from(subString, 'base64url')
  console.log('ACTUAL: buffer', buffer)

  // remove the correct number of pad bytes from the beginning, for 1 char remove 1, for 2 remove 2, for 4 remove 3
  const raw = buffer.subarray(code.length === 1 ? 1 : code.length === 2 ? 2 : 3, buffer.length)
  console.log('ACTUAL: raw', raw)

  // return the Raw
  return { code, raw }
}

export function transformToRaw (text: Text): Raw
// export function transformToRaw (binary: Binary): Raw

export function transformToRaw (textOrBinary: Text): Raw {
  return match(typeof textOrBinary)
    .with('string', () => textToRaw(textOrBinary))
    // .with('object', () => true)
    .run()
}
