export type Styles = {
  slider: string;
  'slider__content-container': string;
  slider__emoji: string;
  'slider__emoji-container': string;
  slider__marker: string;
  'slider__marker--disabled': string;
  'slider__marker--focused': string;
  'slider__marker--invalid': string;
  'slider__marker--selected': string;
  slider__options: string;
  slider__title: string;
  slider__track: string;
  slider__track__step: string;
  'slider__track--disabled': string;
  'slider__track-wrapper': string;
  'slider__track-wrapper--disabled': string;
  slider__value: string;
  'slider__value-container': string;
  'sr-only-slider': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
