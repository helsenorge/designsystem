export type Styles = {
  articleteaser: string;
  articleteaser__button: string;
  'articleteaser__button--expanded': string;
  articleteaser__content: string;
  'articleteaser__content--collapsed': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
