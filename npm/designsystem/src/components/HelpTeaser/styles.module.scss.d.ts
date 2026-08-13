export type Styles = {
  helpteaser: string;
  helpteaser__button: string;
  helpteaser__icon: string;
  helpteaser__text: string;
  helpteaser__title: string;
  'helpteaser--collapsed': string;
  'helpteaser--subdued': string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
