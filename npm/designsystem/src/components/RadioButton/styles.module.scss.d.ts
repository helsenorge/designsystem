export type Styles = {
  'radio-button': string;
  'radio-button__bigform': string;
  'radio-button__bigform--disabled': string;
  'radio-button__bigform--invalid': string;
  'radio-button--disabled': string;
  'radio-button--invalid': string;
  'radio-button--on-blueberry': string;
  'radio-button--on-dark': string;
  'radio-button-errors': string;
  'radio-button-label': string;
  'radio-button-label__bigform': string;
  'radio-button-label__bigform--disabled': string;
  'radio-button-label__bigform--on-blueberry': string;
  'radio-button-label__bigform--on-grey': string;
  'radio-button-label__bigform--selected': string;
  'radio-button-label__bigform--selected-invalid': string;
  'radio-button-label--disabled': string;
  'radio-button-label--invalid': string;
  'radio-button-label--on-dark': string;
  'radio-button-wrapper': string;
  'radio-button-wrapper__bigform': string;
  'radio-button-wrapper__bigform--focused': string;
  'radio-button-wrapper__bigform--invalid': string;
  'radio-button-wrapper__bigform--on-blueberry': string;
  'radio-button-wrapper__bigform--selected': string;
  'radio-button-wrapper--with-error': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
