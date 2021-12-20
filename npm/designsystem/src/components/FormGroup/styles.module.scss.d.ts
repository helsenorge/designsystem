export type Styles = {
  'field-set': string;
  'field-set__legend': string;
  'field-set__legend--on-dark': string;
  'form-group': string;
  'form-group--invalid': string;
  'form-group-wrapper': string;
  'form-group-wrapper__errors': string;
  'form-group-wrapper__title--on-dark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
