import { TestConfiguration } from '../test/TestConfiguration.ts'
import { TestStep } from '../test/TestStep.ts'

export const check = (configuration: TestConfiguration, ...steps: TestStep[]): void => {
  describe(configuration.suite, () => {
    steps.reduce(
      (acc: any, step: TestStep) => step(acc),
      configuration
    )
  })
}
