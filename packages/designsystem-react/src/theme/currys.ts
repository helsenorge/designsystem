import {Colors, palette} from './palette';

interface ColorOptions {
  fallback?: Colors;
  translucent?: boolean;
}

export const color = (name: Colors, options?: ColorOptions) =>
  name
    ? `${palette[name]}${options?.translucent ? '0d' : ''}`
    : options!.fallback
    ? palette[options!.fallback]
    : 'none';
