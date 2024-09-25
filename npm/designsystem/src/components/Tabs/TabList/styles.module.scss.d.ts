export type Styles = {
  'tab-list': string;
  'tab-list__tab': string;
  'tab-list__tab__title-and-icon': string;
  'tab-list__tab--blueberry': string;
  'tab-list__tab--first': string;
  'tab-list__tab--neutral': string;
  'tab-list__tab--not-selected': string;
  'tab-list__tab--selected': string;
  'tab-list__tab--white': string;
  'tab-list--fade-both': string;
  'tab-list--fade-end': string;
  'tab-list--fade-start': string;
  'tab-list--onblueberry': string;
  'tab-list--onneutral': string;
  'tab-list--onwhite': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
