export type Styles = {
  close: string;
  'close--small': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
