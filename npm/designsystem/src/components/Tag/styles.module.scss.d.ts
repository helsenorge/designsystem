export type Styles = {
  tag: string;
  tag__icon: string;
  'tag--banana': string;
  'tag--blueberry': string;
  'tag--cherry': string;
  'tag--emphasised': string;
  'tag--has-icon': string;
  'tag--kiwi': string;
  'tag--large': string;
  'tag--medium': string;
  'tag--neutral': string;
  'tag--plum': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
