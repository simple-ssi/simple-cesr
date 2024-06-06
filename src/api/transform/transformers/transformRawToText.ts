import { Raw } from '../../../core/domain/domains/raw.js'
import { Text } from '../../../core/domain/domains/text.js'
import { text } from '../../encode/text.js'

export const transformRawToText = (raw: Raw): Text => text(raw.code, raw.raw) // can just reuse the text encoder as if encoding from scratch
