// can be injected into a pipe between functions to inspect the current value of the content of the pipe
export const trace = (label: string) => (value: any) => {
  console.log(label, ' => ', value)
  return value
}
