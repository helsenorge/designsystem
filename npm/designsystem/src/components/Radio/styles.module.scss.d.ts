export type Styles = {
  radio: string;
  'radio__marker-wrapper': string;
  'radio-afterlabelchildren-wrapper': string;
  'radio-errors': string;
  'radio-label': string;
  'radio-label__large': string;
  'radio-label__large--disabled': string;
  'radio-label__large--invalid': string;
  'radio-label__large--on-blueberry': string;
  'radio-label__large--on-grey': string;
  'radio-label--disabled': string;
  'radio-label--invalid': string;
  'radio-label--on-dark': string;
  'radio-sublabel-wrapper': string;
  'radio-wrapper': string;
  'radio-wrapper__large': string;
  'radio-wrapper__large--invalid': string;
  'radio-wrapper__large--on-blueberry': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
