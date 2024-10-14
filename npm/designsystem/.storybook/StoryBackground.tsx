import { FormOnColor } from '../src/constants';
import { palette } from '../src/theme/palette';

export const mapToBackgoundColor = (onColor: FormOnColor): string => {
  switch (onColor) {
    case FormOnColor.onblueberry:
      return palette.blueberry50;
    case FormOnColor.ondark:
      return palette.blueberry800;
    case FormOnColor.ongrey:
      return palette.neutral50;
    case FormOnColor.oninvalid:
      return palette.cherry100;
    default:
      return palette.white;
  }
};
