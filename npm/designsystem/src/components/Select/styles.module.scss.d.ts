export type Styles = {
  select: string;
  'select--invalid': string;
  'select--on-blueberry': string;
  'select-arrow': string;
  'select-grid': string;
  'select-grid--disabled': string;
  'select-grid--invalid': string;
  'select-grid--on-blueberry': string;
  'select-grid--transparent': string;
  'select-wrapper': string;
  'select-wrapper__after-label-children': string;
  'select-wrapper__label-wrapper': string;
  'select-wrapper__label-wrapper--on-dark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
