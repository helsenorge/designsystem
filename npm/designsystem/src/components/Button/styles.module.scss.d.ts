export type Styles = {
  button: string;
  button__content: string;
  'button__content--borderless': string;
  'button__content--danger': string;
  'button__content--ellipsis': string;
  'button__content--fill': string;
  'button__content--fluid': string;
  'button__content--inverted': string;
  'button__content--large': string;
  'button__content--large-fluid': string;
  'button__content--outline': string;
  'button__content--warning': string;
  'button__content--with-icon': string;
  'button__left-fluid-content': string;
  'button__left-fluid-content--large': string;
  'button__left-fluid-content--with-icon': string;
  'button--borderless': string;
  'button--danger': string;
  'button--ellipsis': string;
  'button--fill': string;
  'button--fluid': string;
  'button--inverted': string;
  'button--large': string;
  'button--outline': string;
  'button--warning': string;
  'button--with-icon': string;
  'content-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
