export type Styles = {
  'content-wrapper': string;
  'content-wrapper__input': string;
  'content-wrapper__input--disabled': string;
  'content-wrapper--bigform': string;
  'content-wrapper--disabled': string;
  'content-wrapper--invalid': string;
  'content-wrapper--on-blueberry': string;
  'content-wrapper--on-dark': string;
  'content-wrapper--transparent': string;
  textarea: string;
  'textarea__after-label-children': string;
  'textarea__counter-wrapper': string;
  'textarea__counter-wrapper--invalid': string;
  'textarea__counter-wrapper--on-dark': string;
  'textarea__error-text': string;
  'textarea__label-wrapper': string;
  'textarea__label-wrapper--on-dark': string;
  'textarea--gutterBottom': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
