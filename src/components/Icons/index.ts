import Behandlingssted from './Behandlingssted';

export const Size = {
  XXXSmall: 2,
  XXSmall: 4,
  XSmall: 8,
  Small: 16,
  Medium: 24,
  Large: 32,
  XLarge: 48,
  XXLarge: 64,
  XXXLarge: 80,
  XXXXLarge: 112,
  XXXXXLarge: 128,
};

export const Color = {
  Black: '#000000',
  White: '#FFFFFF',
  Gray: '#CCCCCC',
};

export type IconSizes = (typeof Size)[keyof typeof Size];
export type IconColors = (typeof Color)[keyof typeof Color];

export interface IconProps {
  color?: IconColors;
  size?: IconSizes;
}

export const Icon = () => {};
Icon.displayName = 'Icon';

Icon.Behandlingssted = Behandlingssted;
