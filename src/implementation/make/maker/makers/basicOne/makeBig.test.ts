import { Code } from '../../../../../core/code/code.ts'
import { check } from '../testing/check.ts'
import { canMakeIt } from '../testing/checks/canMakeIt.ts'
import { lengthNotWrong } from '../testing/checks/lengthNotWrong.ts'
import { makeBig } from './makeBig.ts'

const example = '0110abcdef012345' // becomes 8 byte Buffer

const configuration = {
  suite: 'Big maker',
  type: 'Big',
  code: 'N' as Code,
  maker: makeBig,
  example: Buffer.from(example, 'hex'),
  length: 8 // 8 bytes
}

check(
  configuration,
  canMakeIt,
  lengthNotWrong
)
