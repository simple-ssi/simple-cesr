// maker validation error
export class PrimitiveWrongLength extends Error {
  constructor (expected: number, actual: number) {
    super(`Input is not the correct length for this primitive type. Expected ${expected} bytes but got ${actual}.`)
    this.name = 'PRIMITIVE_WRONG_LENGTH'
  }
}
