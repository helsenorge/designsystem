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
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
