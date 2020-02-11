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
