// maker validation error
export class PrimitiveInvalidInput extends Error {
  constructor () {
    super('Input is not valid for this primitive type')
    this.name = 'PRIMITIVE_INVALID_INPUT'
  }
}
