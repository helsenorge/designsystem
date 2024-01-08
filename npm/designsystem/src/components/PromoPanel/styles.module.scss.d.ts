export type Styles = {
  promopanel: string;
  promopanel__content: string;
  promopanel__icon: string;
  promopanel__illustration: string;
  'promopanel--blueberry': string;
  'promopanel--cherry': string;
  'promopanel--neutral': string;
  'promopanel--no-illustration': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
