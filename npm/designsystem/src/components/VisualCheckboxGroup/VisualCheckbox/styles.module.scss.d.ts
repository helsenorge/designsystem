export type Styles = {
  'visual-checkbox': string;
  'visual-checkbox__frame': string;
  'visual-checkbox__icon': string;
  'visual-checkbox__input': string;
  'visual-checkbox__label': string;
  'visual-checkbox__visual-content': string;
  'visual-checkbox--checked': string;
  'visual-checkbox--invalid': string;
  'visual-checkbox--variant-line': string;
  'visual-checkbox--variant-rectangle': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
