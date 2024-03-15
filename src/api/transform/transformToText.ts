import { Binary, Text } from '../../core/domain/domains.ts'

export const transformToText = (binary: Binary): Text => binary.toString('base64url')
