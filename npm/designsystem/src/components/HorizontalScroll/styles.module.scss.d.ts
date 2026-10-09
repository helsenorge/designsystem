export type Styles = {
  horizontalscroll: string;
  horizontalscroll__indicator: string;
  'horizontalscroll__indicator--left': string;
  'horizontalscroll__indicator--right': string;
  'horizontalscroll__indicator--visible': string;
  horizontalscroll__viewport: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
