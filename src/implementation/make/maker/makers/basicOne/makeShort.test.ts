import { Code } from '../../../../../core/code/code.ts'
import { check } from '../testing/check.ts'
import { canMakeIt } from '../testing/checks/canMakeIt.ts'
import { lengthNotWrong } from '../testing/checks/lengthNotWrong.ts'
import { makeShort } from './makeShort.ts'

const example = '011F' // becomes two byte Buffer

const configuration = {
  suite: 'Short maker',
  type: 'Short',
  code: 'M' as Code,
  maker: makeShort,
  example: Buffer.from(example, 'hex'),
  length: 2 // 2 bytes
}

check(
  configuration,
  canMakeIt,
  lengthNotWrong
)
