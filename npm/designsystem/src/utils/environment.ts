export const isTest = (): boolean => typeof process !== 'undefined' && process['env']?.NODE_ENV === 'test';
export const isProd = (): boolean => typeof process !== 'undefined' && process['env']?.NODE_ENV === 'production';
