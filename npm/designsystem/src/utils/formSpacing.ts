import React from 'react';

import type { CheckboxProps } from '../components/Checkbox/Checkbox';
import type { LabelProps } from '../components/Label';
import type { RadioProps } from '../components/Radio/Radio';
import type { ToggleProps } from '../components/Toggle';

import { isComponent } from './component';
import Checkbox from '../components/Checkbox/Checkbox';
import Radio from '../components/Radio/Radio';
import Toggle from '../components/Toggle';

export const isCompactComponent = (child: React.ReactNode): boolean =>
  isComponent<CheckboxProps>(child, Checkbox) || isComponent<RadioProps>(child, Radio) || isComponent<ToggleProps>(child, Toggle);

export const hasSublabel = (child: React.ReactNode): boolean => {
  if (isComponent<CheckboxProps>(child, Checkbox) || isComponent<RadioProps>(child, Radio)) {
    return React.isValidElement<LabelProps>(child.props.label) && !!child.props.label.props.sublabel;
  }
  if (isComponent<ToggleProps>(child, Toggle)) {
    return !!child.props.subLabel;
  }
  return false;
};
