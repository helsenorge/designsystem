export type Styles = {
  checkbox: string;
  checkbox__icon: string;
  'checkbox__icon-wrapper': string;
  'checkbox__icon-wrapper--checked': string;
  'checkbox__icon-wrapper--disabled': string;
  'checkbox__icon-wrapper--invalid': string;
  'checkbox__icon-wrapper--on-blueberry': string;
  'checkbox__icon-wrapper--on-dark': string;
  'checkbox-wrapper': string;
  'checkbox-wrapper--bigform': string;
  'checkbox-wrapper--disabled': string;
  'checkbox-wrapper--invalid': string;
  'checkbox-wrapper--on-blueberry': string;
  'checkbox-wrapper--on-dark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
