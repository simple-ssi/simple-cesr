// Roughly copied over from Matter - don't need all parameters of Sizage for the primitives currently implemented
// Calculates the size in bytes an unencoded CESR string should be based on the encoded text length
export const numberOfBytes = (codeLength: number, fullLength: number): number => {
  return Math.floor(((fullLength - codeLength) * 3) / 4)
}
