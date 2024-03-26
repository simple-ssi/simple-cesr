import { Code } from '../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With ECDSA secp256k1 signature',
  type: 'Ecdsa256k1Sig',
  code: '0C' as Code,
  example: Buffer.from('7D5D6C9B7DE5F32F7D3C4C5E31BAE8DE9254758035847E3C3F3A4F42DB8F1EE35BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8C3E5E9A5A91C08E202830721', 'hex'), // a valid example of an ecdsa secp256k1 signature in the format R|S in hex
  length: 64 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
