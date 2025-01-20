export type Styles = {
  emptystate: string;
  'emptystate__additional-text': string;
  emptystate__illustration: string;
  emptystate__text: string;
  'emptystate--blank': string;
  'emptystate--compact': string;
  'emptystate--dashed': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
