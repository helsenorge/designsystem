export type Styles = {
  button: string;
  button__arrow: string;
  'button__arrow--both-icons': string;
  'button__both-icons': string;
  'button__left-icon': string;
  'button__only-icon': string;
  'button__right-icon': string;
  button__text: string;
  'button__text--ellipsis': string;
  'button--arrow': string;
  'button--arrow--both-icons': string;
  'button--borderless': string;
  'button--both-icons': string;
  'button--destructive': string;
  'button--large': string;
  'button--left-icon': string;
  'button--normal': string;
  'button--on-dark': string;
  'button--only-icon': string;
  'button--outline': string;
  'button--right-icon': string;
  'button-wrapper': string;
  'button-wrapper--fluid': string;
  diagonal: string;
  diagonal__line: string;
  'diagonal--on-dark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
