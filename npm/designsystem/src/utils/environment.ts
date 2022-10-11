export const isTest = (): boolean => typeof process !== 'undefined' && process['env']?.NODE_ENV === 'test';
