// debugging tool to log the current state of a value in a pipe

// example:

// pipe(
//   'hello',
//   trace('after hello'),
//   toUpperCase,
//   trace('after toUpperCase'),
//   append('!'),
//   trace('after append')
// )

export const trace = (label: string) => (value: any) => {
  console.log(label, ' => ', value)
  return value
}
