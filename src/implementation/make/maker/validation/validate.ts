import { Validation } from './Validation.ts'

export const validate = (...validations: Validation[]): boolean =>
  validations
    .reduce(
      (acc: boolean, validation: Validation) => acc && validation()
      , true
    )
