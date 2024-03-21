import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With Blake2b self-addressing 256 bit digest',
  type: 'Blake2b256',
  code: 'F' as Code,
  example: Buffer.from('b517a498bf554ab419bbcaa61be07af412d33348eed4b44bd45384550df82d41', 'hex'), // a valid example of a Blake2b256 digest in hex
  length: 32 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
