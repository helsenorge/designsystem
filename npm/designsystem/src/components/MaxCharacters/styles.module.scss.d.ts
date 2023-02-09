export type Styles = {
  'max-characters': string;
  'max-characters--invalid': string;
  'max-characters--on-dark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
