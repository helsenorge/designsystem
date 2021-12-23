export type Styles = {
    textarea: string;
    'textarea--gutterBottom': string;
    'textarea__input': string;
    'textarea__counter-wrapper': string;
  };
  
  export type ClassNames = keyof Styles;
  
  declare const styles: Styles;
  
  export default styles;
  