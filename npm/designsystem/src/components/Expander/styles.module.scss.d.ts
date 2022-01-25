export type Styles = {
  expander__button: string;
  'expander__button--expanded': string;
  expander__content: string;
  'expander__content--banana': string;
  'expander__content--blueberry': string;
  'expander__content--cherry': string;
  'expander__content--expanded': string;
  'expander__content--icon': string;
  'expander__content--kiwi': string;
  'expander__content--large': string;
  'expander__content--nested-line': string;
  'expander__content--neutral': string;
  'expander__content--plum': string;
  'expander__content--small': string;
  'expander__content--white': string;
  expander__icon: string;
  'expander__icon--left': string;
  'expander__icon--right': string;
  expander__trigger: string;
  'expander__trigger--banana': string;
  'expander__trigger--blueberry': string;
  'expander__trigger--cherry': string;
  'expander__trigger--expanded': string;
  'expander__trigger--icon': string;
  'expander__trigger--kiwi': string;
  'expander__trigger--large': string;
  'expander__trigger--neutral': string;
  'expander__trigger--plum': string;
  'expander__trigger--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
