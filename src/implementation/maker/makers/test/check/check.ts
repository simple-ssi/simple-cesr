import { Configuration } from '../configuration.js'
import { Step } from '../step.js'

export const check = (configuration: Configuration, ...steps: Step[]): void => {
  describe(`Make ${configuration.name}`, () => {
    steps.reduce(
      (acc: any, step: Step) => step(acc),
      configuration
    )
  })
}
