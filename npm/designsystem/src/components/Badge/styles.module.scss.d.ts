export type Styles = {
  badge: string;
  'badge--blueberry': string;
  'badge--cherry': string;
  'badge--neutral': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
