export type Styles = {
  radio: string;
  'radio--checked': string;
  'radio--disabled': string;
  'radio-label': string;
  'radio-label--disabled': string;
  'radio-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
