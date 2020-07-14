declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    'title-feature': string;
    'focused-content': string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
    preamble: string;
    legend: string;
    label: string;
    table: string;
    strong: string;
    form: string;
    time: string;
    'image-caption': string;
    'image-credit': string;
    anchorlinkWrapper: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export default StylesModuleScssModule;
