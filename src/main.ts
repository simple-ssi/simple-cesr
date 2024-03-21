import { makeSureThat } from './implementation/make/maker/lib/validate/validate.ts'
import { itIsEightBytes } from './implementation/make/maker/lib/validate/validations/lengthIs.ts'

const raw = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8])
const rawIsCorrectLength = itIsEightBytes(raw)

const thisCheckPasses = (): boolean => true
// const throwInAWrench = (): boolean => false

const result = makeSureThat(
  rawIsCorrectLength,
  thisCheckPasses
  // throwInAWrench
)

console.log(result)
