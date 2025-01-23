export type Styles = {
  'sticky-note': string;
  'sticky-note__error-text': string;
  'sticky-note__footer': string;
  'sticky-note__header': string;
  'sticky-note__header__timestamp': string;
  'sticky-note__textarea': string;
  'sticky-note__triangle': string;
  'sticky-note__x-button': string;
  'sticky-note--error': string;
  'sticky-note--focused': string;
  'sticky-note--hovered': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
