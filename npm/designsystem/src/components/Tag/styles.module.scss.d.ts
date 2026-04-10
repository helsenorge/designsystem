export type Styles = {
  tag: string;
  'tag--accent': string;
  'tag--normal': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
