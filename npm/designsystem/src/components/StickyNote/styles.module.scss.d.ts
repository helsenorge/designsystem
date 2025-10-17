export type Styles = {
  close: string;
  'close__inner-container': string;
  'close__inner-container--error': string;
  'close__inner-container--small': string;
  'close--small': string;
  'sticky-note': string;
  'sticky-note__error-text': string;
  'sticky-note__footer': string;
  'sticky-note__header': string;
  'sticky-note__header__timestamp': string;
  'sticky-note__textarea': string;
  'sticky-note__triangle': string;
  'sticky-note--active': string;
  'sticky-note--error': string;
  'sticky-note--focused': string;
  'sticky-note--hovered': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
