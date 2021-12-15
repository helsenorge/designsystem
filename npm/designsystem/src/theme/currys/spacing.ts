import { spacers } from './../spacers';
import { SpacerSizes } from './../spacers';

export const mapSpacerValue = (spacerSize: SpacerSizes): number => {
  switch (spacerSize) {
    case '4xs':
      return spacers[1];
    case '3xs':
      return spacers[2];
    case '2xs':
      return spacers[3];
    case 'xs':
      return spacers[4];
    case 's':
      return spacers[5];
    case 'm':
      return spacers[6];
    case 'l':
      return spacers[7];
    case 'xl':
      return spacers[8];
    case '2xl':
      return spacers[9];
    case '3xl':
      return spacers[10];
    case '4xl':
      return spacers[11];
    case '5xl':
      return spacers[12];
    case '6xl':
      return spacers[13];
    default:
      return spacers[5];
  }
};

export const getSpacer = (spacerSize: SpacerSizes): string => {
  const spacerValue = mapSpacerValue(spacerSize);
  return `${spacerValue}rem`;
};
