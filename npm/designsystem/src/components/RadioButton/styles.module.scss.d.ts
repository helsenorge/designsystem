export type Styles = {
  'radio-button': string;
  'radio-button__large': string;
  'radio-button__large--disabled': string;
  'radio-button__large--invalid': string;
  'radio-button--disabled': string;
  'radio-button--invalid': string;
  'radio-button--on-blueberry': string;
  'radio-button--on-dark': string;
  'radio-button-errors': string;
  'radio-button-label': string;
  'radio-button-label__large': string;
  'radio-button-label__large--disabled': string;
  'radio-button-label__large--focused': string;
  'radio-button-label__large--on-blueberry': string;
  'radio-button-label__large--on-grey': string;
  'radio-button-label__large--selected': string;
  'radio-button-label__large--selected-invalid': string;
  'radio-button-label--disabled': string;
  'radio-button-label--invalid': string;
  'radio-button-label--on-dark': string;
  'radio-button-wrapper': string;
  'radio-button-wrapper__large': string;
  'radio-button-wrapper__large--focused': string;
  'radio-button-wrapper__large--invalid': string;
  'radio-button-wrapper__large--on-blueberry': string;
  'radio-button-wrapper__large--selected': string;
  'radiobutton-sublabel-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
