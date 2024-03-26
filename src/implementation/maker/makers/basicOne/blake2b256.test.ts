import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const configuration = {
  describe: 'With Blake2b self-addressing 256 bit digest',
  code: 'F' as Code,
  example: Buffer.from('b517a498bf554ab419bbcaa61be07af412d33348eed4b44bd45384550df82d41', 'hex'), // a valid example of a Blake2b256 digest in hex
  length: 32 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
