export type Styles = {
  label: string;
  'label--on-dark': string;
  'label--semibold': string;
  'label--sublabel': string;
  'label-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
