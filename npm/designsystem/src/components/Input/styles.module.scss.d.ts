export type Styles = {
  'content-wrapper': string;
  'content-wrapper__right-of-input': string;
  'input-container': string;
  'input-container__input': string;
  'input-container__input__icon': string;
  'input-container__input--disabled': string;
  'input-container__input--large': string;
  'input-container--disabled': string;
  'input-container--invalid': string;
  'input-container--on-blueberry': string;
  'input-container--on-dark': string;
  'input-container--transparent': string;
  'input-container--with-icon': string;
  'input-container--with-icon--right': string;
  'input-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
