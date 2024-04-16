import { Buffer } from 'buffer/index.js'
import { convertBase64ToBinary } from './convertBase64ToBinary.js'

// a primitive Binary domain is simply the CESR encoded text string as a byte array
export const encodeBinary = (cesrText: string): Buffer =>
  convertBase64ToBinary(cesrText)
