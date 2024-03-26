import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const example = '0110abcdef012345' // becomes 8 byte Buffer

const configuration = {
  suite: 'With Big (8-byte) number',
  type: 'Big',
  code: 'N' as Code,
  example: Buffer.from(example, 'hex'),
  length: 8 // 8 bytes
}

check(
  configuration,
  canMakeIt,
  lengthNotWrong
)
