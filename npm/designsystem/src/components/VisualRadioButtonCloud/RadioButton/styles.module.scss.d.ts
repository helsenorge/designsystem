export type Styles = {
  'visual-radio-button': string;
  'visual-radio-button__icon': string;
  'visual-radio-button__input': string;
  'visual-radio-button__label': string;
  'visual-radio-button__pill': string;
  'visual-radio-button--checked': string;
  'visual-radio-button--invalid': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
