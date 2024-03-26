import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const configuration = {
  describe: 'With Ed25519 Seed',
  code: 'A' as Code,
  example: Buffer.from('4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2a', 'hex'),
  length: 32 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
