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
  radio: string;
  'radio__marker-wrapper': string;
  'radio-afterlabelchildren-wrapper': string;
  'radio-errors': string;
  'radio-label': string;
  'radio-label__large': string;
  'radio-label__large--disabled': string;
  'radio-label__large--invalid': string;
  'radio-label__large--on-blueberry': string;
  'radio-label__large--on-grey': string;
  'radio-label--disabled': string;
  'radio-label--invalid': string;
  'radio-label--on-dark': string;
  'radio-wrapper': string;
  'radio-wrapper__large': string;
  'radio-wrapper__large--invalid': string;
  'radio-wrapper__large--on-blueberry': string;
  sublabel: string;
  'sublabel--on-dark': string;
  'sublabel--subdued': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
