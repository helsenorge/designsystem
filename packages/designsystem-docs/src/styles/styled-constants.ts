import {theme as hndsTheme} from '@helsenorge/designsystem-react';

export const PALETTE = {
  bone: '#ffffff',
  ash: '#f6f5f2',
  waitingRoom: '#9b978c',
  scab: '#383838',
  wheelChair: '#000000',
  bandAid100: '#fbf1db',
  bandAid200: '#f8e1b8',
  surgical100: '#d6f5f3',
  surgical200: '#bbebe8',
  surgical300: '#90d9d3',
  surgical400: '#01656f',
  surgical500: '#00373c',
  strangulation100: '#e7dbff',
  strangulation200: '#d8caf6',
  strangulation300: '#c5adfa',
  strangulation400: '#7a33d7',
  strangulation500: '#651ac6',
  blood100: '#fed1c3',
  blood200: '#dd3300',
  urine100: '#fff0be',
  urine200: '#e8be36',
  nausea100: '#d5efe4',
  nausea200: '#307a5b',
};

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

export const theme = {
  palette: hndsTheme,
};
