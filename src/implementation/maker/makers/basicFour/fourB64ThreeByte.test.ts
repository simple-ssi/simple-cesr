// '9a768bfe3045cd2189abcdef1234567890fedcba9876543210abcdef1234567890abcd1234ef567890abcd1234ef567890abcd1234ef567890abcd1234ef5678'
import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const configuration = {
  describe: 'With four base64chars or three bytes',
  code: '1AAF' as Code,
  example: Buffer.from('5cd218', 'hex'), // 3 bytes in hex
  length: 8
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
