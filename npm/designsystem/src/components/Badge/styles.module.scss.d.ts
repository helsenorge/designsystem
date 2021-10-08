export type Styles = {
  badge: string;
  'badge--banana': string;
  'badge--blueberry': string;
  'badge--cherry': string;
  'badge--kiwi': string;
  'badge--neutral': string;
  'badge--oversized': string;
  'badge--plum': string;
  'badge--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
