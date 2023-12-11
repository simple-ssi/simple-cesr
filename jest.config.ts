// Converted base .js file to TypeScript per suggestion here: https://swizec.com/blog/how-to-configure-jest-with-typescript/

import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  automock: false
}
export default config
