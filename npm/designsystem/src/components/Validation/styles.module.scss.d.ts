export type Styles = {
  'form-group-wrapper--error-sibling': string;
  'validation-errors': string;
  'validation-errors--visible': string;
  'validation-summary': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
