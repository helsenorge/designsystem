export type Styles = {
  highlightpanel__col: string;
  'highlightpanel__col--large-with-icon': string;
  'highlightpanel__col--offset': string;
  highlightpanel__content: string;
  'highlightpanel__content-wrapper': string;
  highlightpanel__icon: string;
  highlightpanel__row: string;
  'highlightpanel__title-wrapper': string;
  'highlightpanel--blueberry': string;
  'highlightpanel--cherry': string;
  'highlightpanel--fluid': string;
  'highlightpanel--has-icon': string;
  'highlightpanel--large': string;
  'highlightpanel--medium': string;
  'highlightpanel--neutral': string;
  'highlightpanel--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
