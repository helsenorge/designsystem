export type Styles = {
  anchorlink: string;
  anchorlink__icon: string;
  'anchorlink-wrapper': string;
  popover: string;
  popover__arrow: string;
  'popover__arrow--over': string;
  'popover__arrow--under': string;
  'popover__arrow--visible': string;
  'popover--visible': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
