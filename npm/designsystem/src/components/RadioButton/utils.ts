import classNames from 'classnames';

import type { FormOnColor } from '../../constants';

import radioButtonStyles from './styles.module.scss';

export const getRadioLabelClasses = (
  radioId: string,
  onColor: FormOnColor,
  large: boolean,
  checkedRadioId?: string
): string | undefined => {
  const onCherry = onColor === 'oninvalid';
  const checked = radioId === checkedRadioId;

  return classNames({
    [radioButtonStyles['radio-button-label__large--on-grey']]: large && onColor === 'ongrey' && !checked,
    [radioButtonStyles['radio-button-label__large--on-blueberry']]: onColor === 'onblueberry' && !checked && large,
    [radioButtonStyles['radio-button-label__large--selected']]: large && checked && !onCherry,
    [radioButtonStyles['radio-button-label__large--selected-invalid']]: large && checked && onCherry,
  });
};
