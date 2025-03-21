export type Styles = {
  'error-wrapper-class': string;
  'error-wrapper-class--with-bottom-margin': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
