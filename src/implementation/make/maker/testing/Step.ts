import { TestConfiguration } from './TestConfiguration.ts'

export type Step = (configuration: TestConfiguration) => TestConfiguration
