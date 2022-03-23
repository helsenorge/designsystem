export type Styles = {
  'form-layout-container': string;
  'form-layout-container--bigform': string;
  'form-layout-container--five': string;
  'form-layout-container--four': string;
  'form-layout-container--three': string;
  'form-layout-container--two': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
