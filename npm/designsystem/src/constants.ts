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

export interface HTMLTextareaProps {
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  id?: string;
  autocomplete?: 'off' | 'on';
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  spellcheck?: 'true' | 'default' | 'false';
  value?: string;
}

export interface HTMLAnchorProps {
  download?: string;
  href?: string;
  hrefLang?: string;
  media?: string;
  ping?: string;
  rel?: string;
  target?: string;
  referrerPolicy?:
    | ''
    | 'same-origin'
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
}

export type ButtonVariant = 'secondary' | 'tertiary' | string | undefined | null;

export enum ModeVariant {
  onWhite = 'onWhite',
  onGrey = 'onGrey',
  onBlueberry = 'onBlueberry',
  onDark = 'onDark',
  onError = 'onError',
}
