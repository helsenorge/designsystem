export enum Palette {
  Bone = '#ffffff',
  Wheelchair = '#000000',
  Surgical100 = '#d8f2ef',
  Surgical200 = '#bbebe8',
  Surgical300 = '#90d9d3',
  Surgical400 = '#01656f',
  Surgical500 = '#00373c',
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
