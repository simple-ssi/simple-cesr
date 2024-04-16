import { Raw } from '../../../core/domain/raw.js'
import { Text } from '../../../core/domain/text.js'
import { text } from '../../encode/text.js'

export const transformRawToText = (raw: Raw): Text =>
  text(raw.code, raw.raw) // can just reuse the text encoder as if encoding from scratch
