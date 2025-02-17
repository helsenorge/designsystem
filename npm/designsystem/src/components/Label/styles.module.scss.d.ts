export type Styles = {
  'after-label-children': string;
  label: string;
  label__texts: string;
  'label--on-dark': string;
  'label--subdued': string;
  'label-content-wrapper': string;
  'label-wrapper': string;
  'label-wrapper--after-label-children': string;
  'label-wrapper--no-bottom-margin': string;
  sublabel: string;
  'sublabel--on-dark': string;
  'sublabel--subdued': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
