import { Buffer } from 'buffer'
import * as R from 'remeda'

import { trace } from './util/trace'

import { Raw } from './core/domains/raw'

// note: eventually this file should contain helpful demonstration code to help those working on the project
// ...as such, it should be noted in the README

const raws: Raw[] = [
  ['M', Buffer.from('1234', 'hex')] as Raw, // Short
  ['N', Buffer.from('12345678', 'hex')] as Raw, // Long
  ['0F', Buffer.from('ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f', 'hex')] as Raw, // SHA3_512_Digest (64 bytes)
  ['1AAB', Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')] as Raw // SECP_256k1_Pub_or_Enc_Key (33 bytes)
]

const getBuffer = (raw: [string, Buffer]) => raw[1]
const convertBuffer = (buffer: Buffer) => buffer.toString('base64url')
const processRaw = (raw: [string, Buffer]) => R.pipe(
  raw,
  getBuffer,
  trace('got buffer'),
  convertBuffer,
  trace('converted buffer')
)

const processedRaws = raws.map(processRaw)

console.log(processedRaws)
