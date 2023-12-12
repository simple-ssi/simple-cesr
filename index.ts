import { Raw, Binary, BinaryType, Text, TextType, TextToBinary, BinaryToText, RawType } from './src/primitive'
import { calculatePrePadBytes } from './src/util'
import * as CodeTable from './src/codeTable'

const primitive = Buffer.from('ffff', 'hex')
const raw = Raw(primitive)
const text = Text(raw)
const binary = Binary(text)

function printIt (raw: RawType, text: TextType, binary: BinaryType): void {
  console.log(raw)
  console.log(text)
  console.log(binary)
}

printIt(raw, text, binary)

const altBinary = TextToBinary(text)
const altText = BinaryToText(binary)

printIt(raw, altText, altBinary)

console.log(calculatePrePadBytes(3))
