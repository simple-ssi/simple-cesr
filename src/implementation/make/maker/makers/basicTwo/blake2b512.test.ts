import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With Blake2b self-addressing 512 bit digest',
  type: 'Blake2b512',
  code: '0E' as Code,
  example: Buffer.from('ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f', 'hex'),
  length: 64 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
