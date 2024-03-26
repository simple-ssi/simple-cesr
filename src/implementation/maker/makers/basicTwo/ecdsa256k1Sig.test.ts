import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const configuration = {
  describe: 'With ECDSA secp256k1 signature',
  code: '0C' as Code,
  example: Buffer.from('7D5D6C9B7DE5F32F7D3C4C5E31BAE8DE9254758035847E3C3F3A4F42DB8F1EE35BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8C3E5E9A5A91C08E202830721', 'hex'), // a valid example of an ecdsa secp256k1 signature in the format R|S in hex
  length: 64 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
