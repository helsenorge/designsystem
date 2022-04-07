export type Styles = {
  'form-layout-child': string;
  'form-layout-child--five': string;
  'form-layout-child--four': string;
  'form-layout-child--three': string;
  'form-layout-child--two': string;
  'form-layout-container': string;
  'form-layout-container--bigform': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
