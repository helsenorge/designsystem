export type Styles = {
  'form-group': string;
  'form-group__legend': string;
  'form-group__legend--bigform': string;
  'form-group__legend--on-dark': string;
  'form-group-wrapper': string;
  'form-group-wrapper__errors': string;
  'form-group-wrapper__title': string;
  'form-group-wrapper__title--bigform': string;
  'form-group-wrapper__title--on-dark': string;
  'form-group-wrapper--bigform': string;
  'form-group-wrapper--invalid': string;
  'form-group-wrapper--on-blueberry': string;
  'form-group-wrapper--on-dark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
