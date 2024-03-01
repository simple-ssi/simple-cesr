import { Code } from '../../../../../core/code/code.ts'
import { check } from '../testing/check.ts'
import { canMakeIt } from '../testing/checks/canMakeIt.ts'
import { lengthNotWrong } from '../testing/checks/lengthNotWrong.ts'
import { makeEd25519Seed } from './makeEd25519Seed.ts'

const configuration = {
  suite: 'Ed25519Seed maker',
  type: 'Ed25519Seed',
  code: 'A' as Code,
  maker: makeEd25519Seed,
  example: '4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2a',
  length: 64 // characters in hex
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
