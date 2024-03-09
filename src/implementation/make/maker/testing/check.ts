import { TestConfiguration } from './TestConfiguration.ts'
import { Step } from './Step.ts'

export const check = (configuration: TestConfiguration, ...steps: Step[]): void => {
  describe(configuration.suite, () => {
    steps.reduce(
      (acc: any, step: Step) => step(acc),
      configuration
    )
  })
}
