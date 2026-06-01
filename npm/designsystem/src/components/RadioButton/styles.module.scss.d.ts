export type Styles = {
  'radio-button': string;
  'radio-button__marker-wrapper': string;
  'radio-button-errors': string;
  'radio-button-label': string;
  'radio-button-label__large': string;
  'radio-button-label__large--disabled': string;
  'radio-button-label__large--invalid': string;
  'radio-button-label__large--on-blueberry': string;
  'radio-button-label__large--on-grey': string;
  'radio-button-label--disabled': string;
  'radio-button-label--invalid': string;
  'radio-button-label--on-dark': string;
  'radio-button-wrapper': string;
  'radio-button-wrapper__large': string;
  'radio-button-wrapper__large--invalid': string;
  'radio-button-wrapper__large--on-blueberry': string;
  'radiobutton-afterlabelchildren-wrapper': string;
  'radiobutton-sublabel-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
