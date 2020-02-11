import {theme as hndsTheme} from '@helsenorge/designsystem-react';

/**
 * CURRY'S
 */

export const palette = (color: string) => (props: any) => props.theme.palette[color];

export const size = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
};

export const screen = {
  xs: `(max-width: ${size.xs}px)`,
  sm: `(max-width: ${size.sm}px)`,
  md: `(max-width: ${size.md}px)`,
  lg: `(max-width: ${size.lg}px)`,
};

export const theme = hndsTheme;
