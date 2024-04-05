import 'mocha'

import { Configuration } from '../configuration'
import { Step } from '../step'

export const check = (configuration: Configuration, ...steps: Step[]): void => {
  describe(configuration.describe, () => {
    steps.reduce(
      (acc: any, step: Step) => step(acc),
      configuration
    )
  })
}
