// Stuff that is fixed per test suite:
// - The test suite name
// = The Maker
// - The type
// - The code
// - The example

import { makeEcdsa256k1 } from '../src/useCases/make/maker/makers/basicFour/makeEcdsa256k1.ts'
import { pipe } from '../src/util/pipe.ts'
import { Code } from '../src/core/code/code.ts'
import { prefixNotWrong } from './checks/prefixNotWrong.ts'
import { lengthNotWrong } from './checks/lengthNotWrong.ts'
import { canMakeIt } from './checks/canMakeIt.ts'

const configuration = {
  type: 'Ecdsa256k1',
  code: '1AAB' as Code,
  maker: makeEcdsa256k1,
  example: '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1',
  length: 66
}

const checkPrefix = prefixNotWrong('04')

describe('Ecdsa256k1 maker', () => {
  pipe(
    configuration,
    canMakeIt,
    lengthNotWrong,
    checkPrefix
  )
})
