import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'

const configuration = {
  describe: 'ECDSA secp256k1 signature',
  code: '0C' as Code,
  example: Buffer.from('7D5D6C9B7DE5F32F7D3C4C5E31BAE8DE9254758035847E3C3F3A4F42DB8F1EE35BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8C3E5E9A5A91C08E202830721', 'hex'), // a valid example of an ecdsa secp256k1 signature in the format R|S in hex
  length: 64 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
