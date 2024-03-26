import { Configuration } from '../configuration.ts'
import { Step } from '../step.ts'

export const check = (configuration: Configuration, ...steps: Step[]): void => {
  describe(configuration.describe, () => {
    steps.reduce(
      (acc: any, step: Step) => step(acc),
      configuration
    )
  })
}
