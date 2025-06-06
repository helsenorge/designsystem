export type Styles = {
  'help-details': string;
  'help-details__content--inline': string;
  'help-details__content--standalone': string;
  'help-details--inline': string;
  'help-details--standalone': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
