export type Styles = {
  'header-content': string;
  'header-content__back-button': string;
  'header-content__title': string;
  'header-content__title--centered': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
