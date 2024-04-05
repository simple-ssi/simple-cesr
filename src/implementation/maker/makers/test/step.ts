import { Configuration } from './configuration'

export type Step = (configuration: Configuration) => Configuration
