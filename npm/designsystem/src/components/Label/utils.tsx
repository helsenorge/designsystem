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

interface RenderLabelProps {
  label: React.ReactNode;
  inputId: string;
  onColor: FormOnColor;
  markup?: LabelTags;
}

export const renderLabel = (props: RenderLabelProps): React.ReactNode => {
  return (
    <>
      {props.label && isComponent<LabelProps>(props.label, Label)
        ? React.cloneElement(props.label, {
            htmlFor: props.inputId,
            htmlMarkup: props.markup || 'label',
            onColor: props.onColor,
          })
        : typeof props.label === 'string' && (
            <Label labelTexts={[{ text: props.label, type: 'normal' }]} htmlFor={props.inputId} onColor={props.onColor} />
          )}
    </>
  );
};

interface RenderLabelAsParentProps {
  label: React.ReactNode;
  children: React.ReactNode;
  inputId: string;
  onColor: FormOnColor;
  labelClassName?: string;
  labelTextClassName?: string;
  sublabelWrapperClassName?: string;
  large?: boolean;
  markup?: LabelTags;
  afterLabelChildrenClassName?: string;
}

export const renderLabelAsParent = (props: RenderLabelAsParentProps): React.ReactNode => {
  return (
    <>
      {props.label && isComponent<LabelProps>(props.label, Label)
        ? React.cloneElement(props.label, {
            htmlFor: props.inputId,
            onColor: props.onColor,
            children: props.children,
            labelClassName: cn(props.labelClassName, props.label.props.labelClassName),
            labelTextClassName: props.labelTextClassName,
            htmlMarkup: props.markup || 'label',
            sublabelWrapperClassName: props.sublabelWrapperClassName,
            sublabel: props.large ? undefined : props.label.props.sublabel,
            statusDot: props.large ? undefined : props.label.props.statusDot,
            afterLabelChildrenClassName: props.afterLabelChildrenClassName,
          })
        : typeof props.label === 'string' && (
            <Label
              labelTexts={[{ text: props.label, type: 'subdued' }]}
              htmlFor={props.inputId}
              onColor={props.onColor}
              htmlMarkup={props.markup || 'label'}
              labelClassName={props.labelClassName}
              labelTextClassName={props.labelTextClassName}
              sublabelWrapperClassName={props.sublabelWrapperClassName}
              afterLabelChildrenClassName={props.afterLabelChildrenClassName}
            >
              {props.children}
            </Label>
          )}
    </>
  );
};
