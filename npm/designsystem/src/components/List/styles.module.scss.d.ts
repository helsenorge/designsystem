export type Styles = {
  list: string;
  list__item: string;
  'list--alphabetical': string;
  'list--bullet': string;
  'list--dashed': string;
  'list--margin': string;
  'list--numbered': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
