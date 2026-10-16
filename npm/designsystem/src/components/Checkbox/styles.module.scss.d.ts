export type Styles = {
  'after-label-children': string;
  checkbox: string;
  'checkbox__marker-wrapper': string;
  'checkbox-afterlabelchildren-wrapper': string;
  'checkbox-errors': string;
  'checkbox-label': string;
  'checkbox-label__large--checked': string;
  'checkbox-label__large--disabled': string;
  'checkbox-label__large--focus': string;
  'checkbox-label__large--on-blueberry': string;
  'checkbox-label__large--on-grey': string;
  'checkbox-label__large--on-invalid': string;
  'checkbox-label__large--on-white': string;
  'checkbox-label__large--white': string;
  'checkbox-label__text': string;
  'checkbox-label__text__large--checked': string;
  'checkbox-label__text__large--disabled': string;
  'checkbox-label__text__large--invalid': string;
  'checkbox-label__text--disabled': string;
  'checkbox-label__text--on-dark': string;
  'checkbox-label--disabled': string;
  'checkbox-label--large': string;
  'checkbox-label--on-dark': string;
  'checkbox-wrapper': string;
  'checkbox-wrapper--large': string;
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
