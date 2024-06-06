import { Binary } from './domains/binary.js'
import { Raw } from './domains/raw.js'
import { Text } from './domains/text.js'

export type Domain = Text | Binary | Raw
