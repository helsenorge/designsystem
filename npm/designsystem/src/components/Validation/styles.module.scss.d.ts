export type Styles = {
  validation: string;
  validation__errors: string;
  'validation--invalid': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
