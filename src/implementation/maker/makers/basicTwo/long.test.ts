import { Code } from '../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const example = '10bdf135' // becomes 4 byte Buffer

const configuration = {
  suite: 'With Long (4-byte) number',
  type: 'Long',
  code: '0H' as Code,
  example: Buffer.from(example, 'hex'), // 4 bytes as hex
  length: 4 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
