import React from 'react';

import cn from 'classnames';

import type { LabelProps, LabelTags } from './Label';
import type { FormOnColor } from '../../constants';

import Label from './Label';
import { isComponent } from '../../utils/component';

export const getLabelText = (label: React.ReactNode): string => {
  let allLabelText = '';

  if (isComponent<LabelProps>(label, Label)) {
    label.props.labelTexts?.forEach(labelText => {
      allLabelText += !labelText.hideFromScreenReader ? labelText.text : '';
    });
  }

  return allLabelText;
};

export const renderLabel = (label: React.ReactNode, inputId: string, onColor: FormOnColor, markup?: LabelTags): React.ReactNode => {
  return (
    <>
      {label && isComponent<LabelProps>(label, Label)
        ? React.cloneElement(label, {
            htmlFor: inputId,
            htmlMarkup: markup || 'label',
            onColor,
          })
        : typeof label === 'string' && <Label labelTexts={[{ text: label, type: 'normal' }]} htmlFor={inputId} onColor={onColor} />}
    </>
  );
};

export const renderLabelAsParent = (
  label: React.ReactNode,
  children: React.ReactNode,
  inputId: string,
  onColor: FormOnColor,
  labelClassName?: string,
  labelTextClassName?: string,
  sublabelWrapperClassName?: string,
  large?: boolean,
  markup?: LabelTags
): React.ReactNode => {
  return (
    <>
      {label && isComponent<LabelProps>(label, Label)
        ? React.cloneElement(label, {
            htmlFor: inputId,
            onColor,
            children: children,
            labelClassName: cn(labelClassName, label.props.labelClassName),
            labelTextClassName: labelTextClassName,
            htmlMarkup: markup || 'label',
            sublabelWrapperClassName: sublabelWrapperClassName,
            sublabel: large ? undefined : label.props.sublabel,
            statusDot: large ? undefined : label.props.statusDot,
          })
        : typeof label === 'string' && (
            <Label
              labelTexts={[{ text: label, type: 'subdued' }]}
              htmlFor={inputId}
              onColor={onColor}
              htmlMarkup={markup || 'label'}
              labelClassName={labelClassName}
              labelTextClassName={labelTextClassName}
              sublabelWrapperClassName={sublabelWrapperClassName}
            >
              {children}
            </Label>
          )}
    </>
  );
};
