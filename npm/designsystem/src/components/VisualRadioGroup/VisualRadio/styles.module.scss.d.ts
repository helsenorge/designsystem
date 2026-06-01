export type Styles = {
  'visual-radio': string;
  'visual-radio__frame': string;
  'visual-radio__icon': string;
  'visual-radio__input': string;
  'visual-radio__label': string;
  'visual-radio__visual-content': string;
  'visual-radio--checked': string;
  'visual-radio--invalid': string;
  'visual-radio--variant-line': string;
  'visual-radio--variant-rectangle': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
