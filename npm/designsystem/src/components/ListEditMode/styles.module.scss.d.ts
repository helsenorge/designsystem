export type Styles = {
  'list-edit-mode': string;
  'list-edit-mode__icon-button': string;
  'list-edit-mode__item': string;
  'list-edit-mode__item__link': string;
  'list-edit-mode__item--blueberry': string;
  'list-edit-mode__item--cherry': string;
  'list-edit-mode__item--fill': string;
  'list-edit-mode__item--line': string;
  'list-edit-mode__item--neutral': string;
  'list-edit-mode__item--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
