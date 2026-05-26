export type Styles = {
  radio__marker: string;
  'radio__marker__large--checked': string;
  'radio__marker__large--checked--disabled': string;
  'radio__marker__large--checked--invalid': string;
  'radio__marker__regular--checked': string;
  'radio__marker__regular--checked--disabled': string;
  'radio__marker__regular--checked--invalid': string;
  'radio__marker__regular--checked--on-dark': string;
  'radio__marker--disabled': string;
  'radio__marker--invalid': string;
  'radio__marker--on-blueberry': string;
  'radio__marker--on-dark': string;
  'radio__marker--on-grey': string;
  'radio__marker--on-invalid': string;
  'radio__marker--on-white': string;
  'radio__marker-dot': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
