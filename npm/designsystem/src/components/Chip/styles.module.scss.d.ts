export type Styles = {
  chip: string;
  'chip--banana': string;
  'chip--blueberry': string;
  'chip--cherry': string;
  'chip--emphasised': string;
  'chip--kiwi': string;
  'chip--large': string;
  'chip--medium': string;
  'chip--neutral': string;
  'chip--normal': string;
  'chip--oncolor': string;
  'chip--plum': string;
  'chip--undo': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
