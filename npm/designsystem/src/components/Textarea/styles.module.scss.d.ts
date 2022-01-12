export type Styles = {
  textarea: string;
  'textarea__counter-wrapper': string;
  'textarea__counter-wrapper--invalid': string;
  'textarea__counter-wrapper--OnDark': string;
  'textarea__error-text': string;
  textarea__input: string;
  'textarea__input--invalid': string;
  'textarea__input--OnBlueberry': string;
  'textarea__input--OnDark': string;
  'textarea__input--transparent': string;
  textarea__label: string;
  'textarea__label--OnDark': string;
  'textarea--gutterBottom': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
