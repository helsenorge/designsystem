export type Styles = {
  select: string;
  'select__label--left': string;
  'select--borderless': string;
  'select--invalid': string;
  'select--on-blueberry': string;
  'select-arrow': string;
  'select-inner-wrapper': string;
  'select-inner-wrapper--borderless': string;
  'select-inner-wrapper--disabled': string;
  'select-inner-wrapper--invalid': string;
  'select-inner-wrapper--on-blueberry': string;
  'select-inner-wrapper--transparent': string;
  'select-wrapper': string;
  'select-wrapper--label-left': string;
  'select-wrapper--label-left--borderless': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
