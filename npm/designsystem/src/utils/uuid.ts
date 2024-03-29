import { isTest } from './environment';

export const uuid = (): string => {
  if (isTest()) {
    return 'test';
  }
  return 'bxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default uuid;
