export type Styles = {
  'loader-spinner': string;
  'loader-spinner__svg': string;
  'loader-spinner__text': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
