import { Raw } from '../src/core/domain/domains.ts';

export const myMaker = (primitive: any): Raw => {
  return {
    code: 'A',
    raw: Buffer.from(primitive, 'hex')
  };
};
