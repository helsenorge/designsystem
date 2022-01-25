import { FormMode } from '../src/constants';
import { palette } from '../src/theme/palette';

export const mapToBackgoundColor = (mode: FormMode): string => {
  switch (mode) {
    case FormMode.onblueberry:
      return palette.blueberry50;
    case FormMode.ondark:
      return palette.blueberry800;
    case FormMode.ongrey:
      return palette.neutral50;
    case FormMode.oninvalid:
      return palette.cherry100;
    default:
      return palette.white;
  }
};
