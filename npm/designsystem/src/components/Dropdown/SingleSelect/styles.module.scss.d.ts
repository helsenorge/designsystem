export type Styles = {
  'single-select-item': string;
  'single-select-item__content': string;
  'single-select-item__content--disabled': string;
  'single-select-item__dot': string;
  'single-select-item__dot--checked': string;
  'single-select-item__dot--disabled': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
