import { Check } from './check/check.js'
import { MakerTestParameters } from './makerTestParameters.js'

export const checkThat = (parameters: MakerTestParameters, ...steps: Check[]): void => {
  describe(`Make ${parameters.name}`, () => {
    steps.reduce(
      (acc: any, check: Check) => check(acc),
      parameters
    )
  })
}
