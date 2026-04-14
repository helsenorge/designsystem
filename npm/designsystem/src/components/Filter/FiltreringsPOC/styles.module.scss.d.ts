export type Styles = {
  filter: string;
  'filter-active-filters': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
