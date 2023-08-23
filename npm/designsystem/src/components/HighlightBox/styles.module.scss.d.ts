export type Styles = {
  desktop: string;
  highlightbox__col: string;
  'highlightbox__col--large-with-icon': string;
  'highlightbox__col--offset': string;
  highlightbox__content: string;
  'highlightbox__content-wrapper': string;
  highlightbox__icon: string;
  highlightbox__row: string;
  'highlightbox--blueberry': string;
  'highlightbox--cherry': string;
  'highlightbox--fluid': string;
  'highlightbox--has-icon': string;
  'highlightbox--kiwi': string;
  'highlightbox--large': string;
  'highlightbox--medium': string;
  'highlightbox--neutral': string;
  'highlightbox--plum': string;
  'highlightbox--white': string;
  mobile: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
