import { Text, buildTextFromBinary } from '../core/domains/text'
import { Binary } from '../core/domains/binary'

export default (binary: Binary): Text => buildTextFromBinary(binary)
