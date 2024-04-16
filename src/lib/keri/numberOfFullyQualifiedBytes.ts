// roughly copied over from Matter - don't need all parameters of Sizage for the primitives currently implemented

// FOR REFERENCE PURPOSE ONLY, NOT CURRENTLY CALLED ANYWHERE

// calculates the size in bytes of a primitive in Binary form based on the size of the CESR encoded text string
export const numberOfFullyQualifiedBytes = (codeLength: number, fullLength: number): number => {
  return Math.floor(((fullLength - codeLength) * 3) / 4)
}
