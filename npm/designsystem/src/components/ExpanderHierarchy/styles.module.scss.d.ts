export type Styles = {
  expanderhierarchy: string;
  'expanderhierarchy--2': string;
  'expanderhierarchy--3-and-lower': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
