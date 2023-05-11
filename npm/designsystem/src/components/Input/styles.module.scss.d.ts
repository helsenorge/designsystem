export type Styles = {
  'content-wrapper': string;
  'content-wrapper__input': string;
  'content-wrapper__input--bigform': string;
  'content-wrapper__input--disabled': string;
  'content-wrapper--bigform': string;
  'content-wrapper--disabled': string;
  'content-wrapper--invalid': string;
  'content-wrapper--on-blueberry': string;
  'content-wrapper--on-dark': string;
  'content-wrapper--transparent': string;
  'content-wrapper--with-icon': string;
  'input-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
