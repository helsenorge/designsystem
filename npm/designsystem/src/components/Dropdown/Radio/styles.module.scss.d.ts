export type Styles = {
  'radio-button': string;
  'radio-button--disabled': string;
  'radio-button--invalid': string;
  'radio-button--on-blueberry': string;
  'radio-button--on-dark': string;
  'radio-button-label': string;
  'radio-button-label--disabled': string;
  'radio-button-label--invalid': string;
  'radio-button-label--on-dark': string;
  'radio-button-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
