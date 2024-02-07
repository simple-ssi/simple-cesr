export const trace = (label: string) => (value: any) => {
  console.log(label, ' => ', value)
  return value
}
