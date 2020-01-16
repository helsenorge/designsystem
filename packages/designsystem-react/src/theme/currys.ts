import {Colors, palette} from './palette';

export const color = (name: Colors, fallback?: Colors) =>
  name ? palette[name] : fallback ? palette[fallback] : 'none';
