export type Styles = {
  avatar: string;
  'avatar--selected': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
