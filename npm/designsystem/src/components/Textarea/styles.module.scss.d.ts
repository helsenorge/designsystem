export type Styles = {
  'input-container': string;
  'input-container__input': string;
  'input-container__input--disabled': string;
  'input-container--bigform': string;
  'input-container--disabled': string;
  'input-container--invalid': string;
  'input-container--on-blueberry': string;
  'input-container--on-dark': string;
  'input-container--transparent': string;
  textarea: string;
  'textarea--gutterBottom': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
