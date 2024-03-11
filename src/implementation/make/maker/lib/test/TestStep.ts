import { TestConfiguration } from './TestConfiguration.ts'

export type TestStep = (configuration: TestConfiguration) => TestConfiguration
