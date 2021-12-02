export type Styles = {
  checkbox: string;
  checkbox__icon: string;
  'checkbox__icon-wrapper': string;
  'checkbox__icon-wrapper--checked': string;
  'checkbox__icon-wrapper--disabled': string;
  'checkbox__icon-wrapper--invalid': string;
  'checkbox__icon-wrapper--on-blueberry': string;
  'checkbox__icon-wrapper--on-dark': string;
  'checkbox-errors': string;
  'checkbox-label': string;
  'checkbox-label--bigform': string;
  'checkbox-label--disabled': string;
  'checkbox-label--invalid': string;
  'checkbox-label--on-blueberry': string;
  'checkbox-label--on-dark': string;
  'checkbox-wrapper--bigform': string;
  'checkbox-wrapper--with-error': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
