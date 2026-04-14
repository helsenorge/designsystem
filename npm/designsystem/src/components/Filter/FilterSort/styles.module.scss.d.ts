export type Styles = {
  select: string;
  select__label: string;
  select__wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
