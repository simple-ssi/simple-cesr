import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../testing/check.ts'
import { canMakeIt } from '../../testing/checks/canMakeIt.ts'
import { lengthNotWrong } from '../../testing/checks/lengthNotWrong.ts'
import { makeSha3512 } from './sha3512.ts'

const configuration = {
  suite: 'Sha3512 maker',
  type: 'Sha3512',
  code: '0F' as Code,
  maker: makeSha3512,
  example: 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f',
  length: 128 // characters in hex
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
