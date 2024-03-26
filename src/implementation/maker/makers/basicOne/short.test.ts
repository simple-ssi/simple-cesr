
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'
import { Code } from '../../../../core/code/code.ts'

const example = '011F' // becomes two byte Buffer

const configuration = {
  suite: 'With Short (2-byte) number',
  type: 'Short',
  code: 'M' as Code,
  example: Buffer.from(example, 'hex'),
  length: 2 // 2 bytes
}

check(
  configuration,
  canMakeIt,
  lengthNotWrong
)
