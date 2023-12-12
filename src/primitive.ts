export type TextType = string & { _type: 'text' }
export type BinaryType = Buffer & { _type: 'binary' }
export type RawType = [string, Buffer] & { _type: 'raw' }

export function Text (raw: RawType): TextType {
  // The code from the code table, which we assume to be a base64url char here
  const code = raw[0]
  // The binary representation of the raw primitive
  const primitive = raw[1]
  // A single zeroed byte, we are assuming a primitive byte length that is a multiple of 2
  const zeroByte = Buffer.from('00', 'hex')
  // Prepend the primitive binary with the single zeroed byte, we are assuming a primitive byte length that is a multiple of 2
  const paddedBinary = Buffer.concat([zeroByte, primitive])
  // Replace the first character of the base64url encoded string (which contains no information about the primitive)
  // with the single code char
  return code + paddedBinary.toString('base64url').slice(1) as TextType
}

export function Binary (text: TextType): BinaryType {
  return Buffer.from(text, 'base64url') as BinaryType
}

export function Raw (primitive: Buffer): RawType {
  return ['M', primitive] as RawType
}

export function TextToBinary (text: TextType): BinaryType {
  return Buffer.from(text, 'base64url') as BinaryType
}

export function BinaryToText (binary: BinaryType): TextType {
  return binary.toString('base64url') as TextType
}
