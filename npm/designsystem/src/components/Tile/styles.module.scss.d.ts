export type Styles = {
  tile: string;
  tile__description: string;
  tile__title: string;
  'tile__title--compact': string;
  'tile__title--highlighted': string;
  'tile--compact': string;
  'tile--fixed': string;
  'tile--highlighted': string;
  'title-wrapper': string;
  'title-wrapper--compact': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
