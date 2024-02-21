export type Styles = {
  'form-group-wrapper--error-sibling': string;
  validation__errors: string;
  'validation__errors--visible': string;
  validation__summary: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
