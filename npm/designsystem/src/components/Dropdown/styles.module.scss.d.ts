export type Styles = {
  dropdown: string;
  dropdown__close: string;
  dropdown__content: string;
  'dropdown__content--open': string;
  'dropdown__left-icon': string;
  'dropdown__list-item': string;
  'dropdown__list-item--single-select': string;
  'dropdown__multiselect-item': string;
  dropdown__options: string;
  'dropdown__right-icon': string;
  dropdown__toggle: string;
  dropdown__toggle__text: string;
  'dropdown__toggle--borderless': string;
  'dropdown__toggle--open': string;
  'dropdown__toggle--transparent': string;
  'dropdown__toggle--with-icon': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
