import { validate } from './implementation/make/maker/validation/validate.ts'
import { validateLength } from './implementation/make/maker/validation/validations/validateLength.ts'

const lengthThreeBytes = validateLength(3)

const raw = Buffer.from([1, 2, 3])
const rawIsCorrectLength = lengthThreeBytes(raw)

const throwInAWrench = (): boolean => true

const result = validate(
  rawIsCorrectLength,
  throwInAWrench
)

console.log(result)
