export type Styles = {
  spacer: string;
  'spacer--2xl': string;
  'spacer--2xs': string;
  'spacer--3xl': string;
  'spacer--3xs': string;
  'spacer--4xl': string;
  'spacer--4xs': string;
  'spacer--5xl': string;
  'spacer--6xl': string;
  'spacer--l': string;
  'spacer--m': string;
  'spacer--s': string;
  'spacer--xl': string;
  'spacer--xs': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
