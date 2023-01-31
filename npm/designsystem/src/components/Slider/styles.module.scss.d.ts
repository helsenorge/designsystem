export type Styles = {
  slider: string;
  slider__marker: string;
  'slider__marker--disabled': string;
  slider__options: string;
  slider__track: string;
  'slider__track--disabled': string;
  'slider__track-wrapper': string;
  'slider__track-wrapper--disabled': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
