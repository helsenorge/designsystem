export type Styles = {
  select: string;
  'select--invalid': string;
  'select--on-blueberry': string;
  'select-arrow': string;
  'select-inner-wrapper': string;
  'select-inner-wrapper--disabled': string;
  'select-inner-wrapper--invalid': string;
  'select-inner-wrapper--on-blueberry': string;
  'select-inner-wrapper--transparent': string;
  'select-wrapper': string;
  'select-wrapper__after-label-children': string;
  'select-wrapper__label-wrapper': string;
  'select-wrapper__label-wrapper--on-dark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
