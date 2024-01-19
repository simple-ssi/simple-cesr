import { Text, Raw, buildRawFromText } from '../core/domain'
export const textToRaw = (text: Text): Raw => buildRawFromText(text)
