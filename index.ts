import { Raw, Binary, BinaryType, Text, TextType, TextToBinary, BinaryToText, RawType } from './src/core/domain'
import { calculatePadSize } from './src/util'

const primitive = Buffer.from('ffff', 'hex')
const raw = Raw('short', primitive)
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

console.log(calculatePadSize(32))
console.log(calculatePadSize(64))

const b1 = Buffer.from('0001', 'hex')
console.log(`Buffer length is ${b1.length}`)
