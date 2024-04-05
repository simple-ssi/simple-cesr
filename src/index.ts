export function helloWorld (): string {
  const message = 'Hello World from my example modern npm package!'
  return message
}

export function goodBye (): string {
  const message = 'Goodbye from my example modern npm package!'
  return message
}

export default {
  helloWorld,
  goodBye
}
