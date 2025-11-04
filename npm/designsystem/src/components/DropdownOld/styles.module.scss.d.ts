export type Styles = {
  dropdown: string;
  dropdown__close: string;
  dropdown__content: string;
  'dropdown__content--open': string;
  dropdown__icon: string;
  dropdown__input: string;
  dropdown__label: string;
  dropdown__options: string;
  dropdown__toggle: string;
  dropdown__toggle__label: string;
  'dropdown__toggle--fluid': string;
  'dropdown__toggle--on-blueberry': string;
  'dropdown__toggle--on-cherry': string;
  'dropdown__toggle--on-grey': string;
  'dropdown__toggle--on-white': string;
  'dropdown__toggle--open': string;
  'dropdown__toggle--transparent': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
