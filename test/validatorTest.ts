import { Validator } from './validator.ts'

export const validatorTest = (...validators: Validator[]) => (value: any): void => {
  validators.reduce(
    (acc: any, validator: Validator) =>
      validator(acc), value
  )
}
