export type Styles = {
  highlightpanel: string;
  highlightpanel__content: string;
  'highlightpanel__content__children--compact': string;
  'highlightpanel__content--compact': string;
  highlightpanel__icon: string;
  'highlightpanel__icon--compact': string;
  'highlightpanel__title-wrapper': string;
  'highlightpanel--blueberry': string;
  'highlightpanel--cherry': string;
  'highlightpanel--compact': string;
  'highlightpanel--has-icon': string;
  'highlightpanel--neutral': string;
  'highlightpanel--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
