// simple conversion of the primitive (as a byte array) to Base64
export const convertToBase64 = (primitive: Buffer): string => primitive.toString('base64url')
