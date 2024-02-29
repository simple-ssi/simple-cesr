import { Maker } from '../src/application/makeRaw/maker/maker.ts'
import { Code } from '../src/core/code/code.ts'
import { Validator } from './validator.ts'

export interface TestConfiguration {
  type: string
  code: Code
  maker: Maker
  validators: Validator[]
  example: any
}
