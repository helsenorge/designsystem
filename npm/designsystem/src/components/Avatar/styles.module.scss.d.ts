export type Styles = {
  avatar: string;
  'avatar--black': string;
  'avatar--selected': string;
  'avatar--small': string;
  'avatar--xsmall': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
