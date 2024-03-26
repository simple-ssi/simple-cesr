import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const configuration = {
  describe: 'With Blake2s self-addressing 256 bit digest',
  code: 'G' as Code,
  example: Buffer.from('2080982ef42d6be9c30716c33633f0b4e8f35f7e031e5822e4f6e994617aee2e', 'hex'), // valid example of Blake2s256 digest in hex
  length: 32 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
