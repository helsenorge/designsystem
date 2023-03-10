export type HeadingTags = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const getHeadingTag = (htmlMarkup?: HeadingTags): HeadingTags => {
  switch (htmlMarkup) {
    case 'h2':
      return 'h3';
    case 'h3':
      return 'h4';
    case 'h4':
      return 'h5';
    case 'h5':
      return 'h6';
    case 'h6':
      return 'h6';
    default:
      return 'h2';
  }
};
