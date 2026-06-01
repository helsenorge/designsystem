export type Styles = {
  checkbox__marker: string;
  'checkbox__marker__large--checked': string;
  'checkbox__marker__large--checked--disabled': string;
  'checkbox__marker__large--checked--invalid': string;
  'checkbox__marker__large--disabled': string;
  'checkbox__marker__large--invalid': string;
  'checkbox__marker__regular--checked': string;
  'checkbox__marker__regular--invalid': string;
  'checkbox__marker__regular--on-dark': string;
  'checkbox__marker--disabled': string;
  'checkbox__marker--invalid': string;
  'checkbox__marker--on-blueberry': string;
  'checkbox__marker--on-dark': string;
  'checkbox__marker--on-grey': string;
  'checkbox__marker--on-invalid': string;
  'checkbox__marker--on-white': string;
  'checkbox__marker-icon': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
