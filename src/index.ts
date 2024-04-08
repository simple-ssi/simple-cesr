import { hello, goodbye } from './message/message.js'
import { text } from './api/encode/text.js'

export function helloWorld (): string {
  const message = `${hello} from my example modern npm package!`
  return message
}

export function goodBye (): string {
  const message = `${goodbye} from my example modern npm package!`
  return message
}

export { text } from './api/encode/text.js'

export default {
  helloWorld,
  goodBye,
  text
}
