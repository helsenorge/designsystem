export type Styles = {
  tag: string;
  'tag--accent1': string;
  'tag--accent2': string;
  'tag--normal': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
