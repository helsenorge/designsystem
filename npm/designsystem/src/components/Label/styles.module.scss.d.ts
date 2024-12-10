export type Styles = {
  'after-label-children': string;
  label: string;
  label__texts: string;
  'label--on-dark': string;
  'label--subdued': string;
  'label--sublabel': string;
  'label-content-wrapper': string;
  'label-wrapper': string;
  'label-wrapper--after-label-children': string;
  'label-wrapper--no-bottom-margin': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
