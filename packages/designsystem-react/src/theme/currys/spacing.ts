import {spacers} from './../spacers';
import {SpacerSizes} from './../spacers';

export const mapSpacerValue = (spacerSize: SpacerSizes): number => {
  switch (spacerSize) {
    case '3xs':
      return spacers[1];
    case '2xs':
      return spacers[2];
    case 'xs':
      return spacers[3];
    case 's':
      return spacers[4];
    case 'm':
      return spacers[5];
    case 'l':
      return spacers[6];
    case 'xl':
      return spacers[7];
    case '2xl':
      return spacers[8];
    case '3xl':
      return spacers[9];
    case '4xl':
      return spacers[10];
    case '5xl':
      return spacers[11];
    default:
      return spacers[4];
  }
};

export const getSpacer = (spacerSize: SpacerSizes): string => {
  const spacerValue = mapSpacerValue(spacerSize);
  return `${spacerValue}rem`;
};
