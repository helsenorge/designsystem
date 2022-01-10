export type Styles = {
  textarea: string;
  'textarea__counter-wrapper': string;
  'textarea__counter-wrapper--invalid': string;
  'textarea__counter-wrapper--onDark': string;
  'textarea__error-text': string;
  textarea__input: string;
  'textarea__input--invalid': string;
  'textarea__input--onBlueberry': string;
  'textarea__input--onDark': string;
  'textarea__input--transparent': string;
  textarea__label: string;
  'textarea__label--onDark': string;
  'textarea--gutterBottom': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
