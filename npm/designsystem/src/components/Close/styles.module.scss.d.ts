export type Styles = {
  close: string;
  'close__inner-container': string;
  'close__inner-container--plum': string;
  'close__inner-container--small': string;
  'close--small': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
