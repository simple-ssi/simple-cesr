import { Code } from '../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With Blake3 self-addressing 512 bit digest',
  type: 'Blake3512',
  code: '0D' as Code,
  example: Buffer.from('3a146daa178fa1ee2ec8aa5c73749d7423addcf1298856ec885606996959e45ff206ac6670a89fdae61f94045a05be90f9bd990a0213d3846b1edb6646747a73', 'hex'), // a valid example of a blake3 512-bit digest in hex
  length: 64 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
