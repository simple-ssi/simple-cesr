import { Buffer } from 'buffer'
import { match } from 'ts-pattern'
import { CodeSize } from '../core/code/code.ts'

// Padders are functions that take a raw primitive value as a buffer and return a padded buffer
type Padder = (raw: Buffer) => Buffer
const padOneByte = (raw: Buffer): Buffer => Buffer.concat([Buffer.from([0]), Buffer.from(raw)])
const padTwoBytes = (raw: Buffer): Buffer => Buffer.concat([Buffer.from([0, 0]), Buffer.from(raw)])
const padZeroBytes = (raw: Buffer): Buffer => raw
export const padRawPrimitive = (codeLength: CodeSize): Padder => match(codeLength)
  .with(1, () => padOneByte)
  .with(2, () => padTwoBytes)
  .with(4, () => padZeroBytes)
  .exhaustive()
