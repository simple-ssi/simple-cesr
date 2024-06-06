import { TheConditionToMeet } from './theConditionToMeet.js'

const validate = (...validations: TheConditionToMeet[]): boolean =>
  validations
    .reduce(
      (acc: boolean, validation: TheConditionToMeet) => acc && validation()
      , true
    )

export const makeSureThat = validate
