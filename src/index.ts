import { hello, goodbye } from './message/message.js'

export function helloWorld (): string {
  const message = `${hello} from my example modern npm package!`
  return message
}

export function goodBye (): string {
  const message = `${goodbye} from my example modern npm package!`
  return message
}

export default {
  helloWorld,
  goodBye
}
