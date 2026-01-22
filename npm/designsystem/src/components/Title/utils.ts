import type { TitleMargin } from './Title';

export const instanceOfTitleMargin = (margin: unknown): margin is TitleMargin => {
  return Object.prototype.hasOwnProperty.call(margin, 'marginTop') && Object.prototype.hasOwnProperty.call(margin, 'marginBottom');
};
