import { Buffer } from 'buffer'
import * as R from 'remeda'
import { match } from 'ts-pattern'

import { TextCode, ValidTextCodeSize } from '../../core/codes/textCode'
import { Text } from '../../core/domains/text'
import { encodeAsRaw } from './encodeAsRaw'
import { Raw } from '../../core/domains/raw'

import { trace } from '../../util/trace'

const extractBuffer = (raw: Raw): Buffer => raw[1]

type Padder = (buffer: Buffer) => Buffer
const padOneByte = (buffer: Buffer): Buffer => Buffer.concat([Buffer.from([0x00]), Buffer.from(buffer)])
const padTwoBytes = (buffer: Buffer): Buffer => Buffer.concat([Buffer.from([0x00, 0x00]), Buffer.from(buffer)])
const padZeroBytes = (buffer: Buffer): Buffer => buffer
const padBuffer = (codeLength: ValidTextCodeSize): Padder => match(codeLength)
  .with(1, () => padOneByte)
  .with(2, () => padTwoBytes)
  .with(4, () => padZeroBytes)
  .exhaustive()

const toBase64 = (binary: Buffer): string => binary.toString('base64url')

type Swapper = (text: string) => string
const swapInOneCharacterCode = (code: TextCode): Swapper => (text: string) => code + text.substring(1)
const swapInTwoCharacterCode = (code: TextCode): Swapper => (text: string) => code + text.substring(2)
const swapInFourCharacterCode = (code: TextCode): Swapper => (text: string) => code + text
const swapInTextCode = (codeLength: ValidTextCodeSize) => (code: TextCode): Swapper => match(codeLength)
  .with(1, () => swapInOneCharacterCode(code))
  .with(2, () => swapInTwoCharacterCode(code))
  .with(4, () => swapInFourCharacterCode(code))
  .exhaustive()

export const encodeAsText = (code: TextCode, primitive: any): Text =>
  R.pipe(
    encodeAsRaw(code, primitive),
    // trace('Raw'),
    extractBuffer,
    // trace('Buffer'),
    padBuffer(code.length as ValidTextCodeSize),
    // trace('Padded Buffer'),
    toBase64,
    // trace('Base64'),
    swapInTextCode(code.length as ValidTextCodeSize)(code)
    // trace('Encoded Text')
  ) as Text
