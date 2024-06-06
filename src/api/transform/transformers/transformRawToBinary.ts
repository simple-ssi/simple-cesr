import { Binary } from '../../../core/domain/domains/binary.js'
import { Raw } from '../../../core/domain/domains/raw.js'
import { binary } from '../../encode/binary.js'

export const transformRawToBinary = (raw: Raw): Binary => binary(raw.code, raw.raw) // can just reuse the binary encoder as if encoding from scratch
