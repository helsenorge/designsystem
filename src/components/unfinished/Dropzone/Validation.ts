import {MimeTypes} from './index';

export const sizeIsValid = (file: File, size: number) => {
  if (file.size > size) {
    return false;
  }
  return true;
};

export const typeIsValid = (file: File, validFileTypes: Array<MimeTypes> | MimeTypes) => {
  if (Array.isArray(validFileTypes)) {
    if (validFileTypes.indexOf(file.type as MimeTypes) < 0) {
      return false;
    }
  } else if (validFileTypes !== file.type) {
    return false;
  }
  return true;
};
