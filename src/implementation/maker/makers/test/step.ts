import { Configuration } from './configuration.ts'

export type Step = (configuration: Configuration) => Configuration
