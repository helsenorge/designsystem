export type Styles = {
  emptystate: string;
  'emptystate--blank': string;
  'emptystate--compact': string;
  'emptystate--dashed': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
