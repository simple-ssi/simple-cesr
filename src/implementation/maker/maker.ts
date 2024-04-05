import { Raw } from '../../core/domain/domains'

export type Maker = (primitive: any) => Raw

// maker validation errors
export class PrimitiveWrongLength extends Error {
  constructor (expected: number, actual: number) {
    super(`Input is not the correct length for this primitive type. Expected ${expected} bytes but got ${actual}.`)
    this.name = 'PRIMITIVE_WRONG_LENGTH'
  }
}

export class PrimitiveInvalidInput extends Error {
  constructor () {
    super('Input is not valid for this primitive type')
    this.name = 'PRIMITIVE_INVALID_INPUT'
  }
}
