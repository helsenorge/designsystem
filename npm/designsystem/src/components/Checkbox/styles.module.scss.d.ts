export type Styles = {
  checkbox: string;
  checkbox__icon: string;
  'checkbox__icon-wrapper': string;
  'checkbox__icon-wrapper__large--checked': string;
  'checkbox__icon-wrapper__large--checked--disabled': string;
  'checkbox__icon-wrapper__large--checked--invalid': string;
  'checkbox__icon-wrapper__large--disabled': string;
  'checkbox__icon-wrapper__large--invalid': string;
  'checkbox__icon-wrapper__regular--checked': string;
  'checkbox__icon-wrapper__regular--invalid': string;
  'checkbox__icon-wrapper__regular--on-dark': string;
  'checkbox__icon-wrapper--disabled': string;
  'checkbox__icon-wrapper--invalid': string;
  'checkbox__icon-wrapper--on-blueberry': string;
  'checkbox__icon-wrapper--on-dark': string;
  'checkbox__icon-wrapper--on-grey': string;
  'checkbox__icon-wrapper--on-invalid': string;
  'checkbox__icon-wrapper--on-white': string;
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
  'checkbox-wrapper--large': string;
  'checkbox-wrapper--with-error': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
