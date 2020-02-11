import {palette} from './palette';
import {typography} from './typography';
export * from './currys';

export const theme = {
  ...palette,
  ...typography,
};
