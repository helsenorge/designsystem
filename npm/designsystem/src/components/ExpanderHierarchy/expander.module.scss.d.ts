export type Styles = {
  expander: string;
  expander__button: string;
  'expander__button--2-and-lower': string;
  'expander__button--print': string;
  expander__content: string;
  'expander__content--1': string;
  'expander__content--2': string;
  'expander__content--3-and-lower': string;
  expander__icon: string;
  'expander__icon--2-and-lower': string;
  'expander__icon--3-and-lower': string;
  expander__title: string;
  'expander__title--1': string;
  'expander__title--2': string;
  'expander__title--3': string;
  'expander__title--4-and-lower': string;
  'fade-in': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
