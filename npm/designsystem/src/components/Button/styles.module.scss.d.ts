export type Styles = {
  button: string;
  'button--borderless': string;
  'button--destructive': string;
  'button--fluid': string;
  'button--outline': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
