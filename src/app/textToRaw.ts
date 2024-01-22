import { Text, Raw, buildRawFromText } from '../core/domain'
export default (text: Text): Raw => buildRawFromText(text)
