export type Styles = {
  paneltitle: string;
  paneltitle__badge: string;
  paneltitle__icon: string;
  paneltitle__title: string;
  'paneltitle--has-icon': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
