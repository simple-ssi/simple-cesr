import { Configuration } from './configuration.js'

export type Step = (configuration: Configuration) => Configuration
