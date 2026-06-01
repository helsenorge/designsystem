export type Styles = {
  'visual-checkbox': string;
  'visual-checkbox__icon': string;
  'visual-checkbox__input': string;
  'visual-checkbox__label': string;
  'visual-checkbox__pill': string;
  'visual-checkbox--checked': string;
  'visual-checkbox--invalid': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
