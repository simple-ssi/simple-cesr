import { Text, Binary, buildTextFromBinary } from '../core/domain'

export default (binary: Binary): Text => buildTextFromBinary(binary)
