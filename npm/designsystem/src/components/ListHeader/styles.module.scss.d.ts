export type Styles = {
  label: string;
  'label__sub-level': string;
  'label--emphasised': string;
  statusDot: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
