export enum Palette {
  Ash = '#f6f5f2',
  Scalpel = '#dedbd3',
  Strangulation100 = '#eee5ff',
  Strangulation200 = '#d9c9fa',
  Strangulation300 = '#c5adfa',
  Strangulation400 = '#7a33d7',
  Strangulation500 = '#651ac6',
  Strangulation600 = '#560fb3',
  Bone = 'white',
  Wheelchair = 'black',
  Surgical100 = '#d8f2ef',
  Surgical200 = '#bbebe8',
  Surgical300 = '#90d9d3',
  Surgical400 = '#01656f',
  Surgical500 = '#00373c',
}

export enum IconSize {
  XSmall = 38,
  Small = 48,
  Medium = 64,
  Large = 80,
  XLarge = 130,
}

export interface HTMLButtonProps {
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: 'submit' | 'reset' | 'button' | string;
  value?: string | string[] | number;
}

export interface HTMLAnchorProps {
  download?: any;
  href?: string;
  hrefLang?: string;
  media?: string;
  ping?: string;
  rel?: string;
  target?: string;
  referrerPolicy?: string;
}

export type ButtonVariant = 'secondary' | 'tertiary' | string | undefined | null;
