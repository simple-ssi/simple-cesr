import { Text, Binary, buildTextFromBinary } from '../core/representation'

export default (binary: Binary): Text => buildTextFromBinary(binary)
