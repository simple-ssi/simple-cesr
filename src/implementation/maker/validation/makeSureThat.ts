import { Validation } from './validation.js'

const validate = (...validations: Validation[]): boolean =>
  validations
    .reduce(
      (acc: boolean, validation: Validation) => acc && validation()
      , true
    )

export const makeSureThat = validate
