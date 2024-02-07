import { makePrimitive } from '../../core/makePrimitive'
import { TextCode } from '../../core/codes/textCode'
import { Raw } from '../../core/domains/raw'

export const encodeAsRaw = (code: TextCode, primitive: any): Raw => [code, makePrimitive(code, primitive).value] as Raw
