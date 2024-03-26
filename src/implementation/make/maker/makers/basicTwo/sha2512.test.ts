import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With Sha2 self-addressing 512 bit digest',
  type: 'Sha2512',
  code: '0G' as Code,
  example: Buffer.from('8524edf2f7ab73ebb7190ecd1e2702d1b371ed934ae75b694f6d21cad9adb59a2154e750bcddfa7262c4b88dfe976e130c1f50930c5a62eb73280933b7b236e7', 'hex'), // valid example of sha2 512 bit self-addressing digest as hex
  length: 64 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
