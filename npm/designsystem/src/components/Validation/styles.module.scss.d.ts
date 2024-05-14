export type Styles = {
  'validation__error-wrapper': string;
  validation__errors: string;
  'validation__errors--visible': string;
  validation__summary: string;
  'validation__summary--visible': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
