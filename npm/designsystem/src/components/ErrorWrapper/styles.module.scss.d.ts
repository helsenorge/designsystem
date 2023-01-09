export type Styles = {
  'error-wrapper': string;
  'error-wrapper__errors': string;
  'error-wrapper--with-error': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
