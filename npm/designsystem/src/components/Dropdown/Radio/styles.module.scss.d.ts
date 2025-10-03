export type Styles = {
  'radio-button': string;
  'radio-button--disabled': string;
  'radio-button-label': string;
  'radio-button-label--disabled': string;
  'radio-button-wrapper': string;
  'radiobutton-sublabel-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
