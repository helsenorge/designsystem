export type Styles = {
  'anchorlink-wrapper': string;
  body: string;
  'compact-data': string;
  'definition-list-data': string;
  'definition-list-type': string;
  'focused-content': string;
  form: string;
  'help-text': string;
  'help-trigger-text': string;
  'image-caption': string;
  'image-credit': string;
  'input-text': string;
  'input-text-large': string;
  label: string;
  'label-subdued': string;
  legend: string;
  preamble: string;
  'status-timestamp': string;
  strong: string;
  sublabel: string;
  'sublabel-subdued': string;
  'table-cell': string;
  'text-list': string;
  'title-feature': string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
