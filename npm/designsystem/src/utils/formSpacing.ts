import React from 'react';

import type { CheckboxProps } from '../components/Checkbox/Checkbox';
import type { LabelProps } from '../components/Label';
import type { RadioButtonProps } from '../components/RadioButton/RadioButton';
import type { ToggleProps } from '../components/Toggle';

import { isComponent } from './component';
import Checkbox from '../components/Checkbox/Checkbox';
import RadioButton from '../components/RadioButton/RadioButton';
import Toggle from '../components/Toggle';

export const isCompactComponent = (child: React.ReactNode): boolean =>
  isComponent<CheckboxProps>(child, Checkbox) ||
  isComponent<RadioButtonProps>(child, RadioButton) ||
  isComponent<ToggleProps>(child, Toggle);

export const hasSublabel = (child: React.ReactNode): boolean => {
  if (isComponent<CheckboxProps>(child, Checkbox) || isComponent<RadioButtonProps>(child, RadioButton)) {
    return React.isValidElement<LabelProps>(child.props.label) && !!child.props.label.props.sublabel;
  }
  if (isComponent<ToggleProps>(child, Toggle)) {
    return !!child.props.subLabel;
  }
  return false;
};
