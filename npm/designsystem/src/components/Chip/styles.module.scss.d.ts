export type Styles = {
  chip: string;
  chip__chip: string;
  chip__chip__inner: string;
  'chip__chip__inner--without-close': string;
  chip__close: string;
  chip__close__inner: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
