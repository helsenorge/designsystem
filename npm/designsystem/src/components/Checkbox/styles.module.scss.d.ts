export type Styles = {
  checkbox: string;
  'checkbox__marker-wrapper': string;
  'checkbox-afterlabelchildren-wrapper': string;
  'checkbox-errors': string;
  'checkbox-label': string;
  'checkbox-label__large--checked': string;
  'checkbox-label__large--disabled': string;
  'checkbox-label__large--focus': string;
  'checkbox-label__large--on-blueberry': string;
  'checkbox-label__large--on-grey': string;
  'checkbox-label__large--on-invalid': string;
  'checkbox-label__large--on-white': string;
  'checkbox-label__large--white': string;
  'checkbox-label__text': string;
  'checkbox-label__text__large--checked': string;
  'checkbox-label__text__large--disabled': string;
  'checkbox-label__text__large--invalid': string;
  'checkbox-label__text--disabled': string;
  'checkbox-label__text--on-dark': string;
  'checkbox-label--disabled': string;
  'checkbox-label--large': string;
  'checkbox-label--on-dark': string;
  'checkbox-sublabel-wrapper': string;
  'checkbox-wrapper': string;
  'checkbox-wrapper--large': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
