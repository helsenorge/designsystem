import React, { FunctionComponent } from 'react';

import cn from 'classnames';

import { Sublabel, SublabelProps } from './SubLabel';
import { AnalyticsId, FormOnColor } from '../../constants';
import { isComponent } from '../../utils/component';
import FormFieldTag, { FormFieldTagLevel } from '../FormFieldTag';
import Spacer from '../Spacer';
import StatusDot, { StatusDotProps } from '../StatusDot';

import styles from './styles.module.scss';

export type LabelText = {
  hideFromScreenReader?: boolean;
  text: string;
  type?: 'normal' | 'subdued';
};

export type LabelTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'label' | 'p';

export interface LabelProps {
  /** Component shown after label - discourage use of this */
  afterLabelChildren?: React.ReactNode;
  /** Sets the content of the Label */
  children?: React.ReactNode;
  /** Sets a tag that describes whether the form field is required or optional */
  formFieldLevel?: FormFieldTagLevel;
  /** Adds custom classes to the label tag. */
  labelClassName?: string;
  /** Adds custom classes to the label text. */
  labelTextClassName?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Id that is put on the "for" attribute of the label */
  htmlFor?: string;
  /** Changes the underlying element of the label */
  htmlMarkup?: LabelTags;
  /** Id som plasseres på <label/> */
  labelId?: string;
  /** Array of main label strings. Can be of type semibold or normal */
  labelTexts?: LabelText[];
  /** Array of sublabel strings. Can be of type semibold or normal */
  onColor?: keyof typeof FormOnColor;
  /** StatusDot placed underneath the last sublabel */
  statusDot?: React.ReactNode;
  /** Sublabel component */
  sublabel?: React.ReactNode;
  /** Adds custom classes to the div wrapping the sublabels. */
  sublabelWrapperClassName?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

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

const Label: FunctionComponent<LabelProps> = ({
  afterLabelChildren,
  children,
  className,
  formFieldLevel,
  htmlFor,
  htmlMarkup = 'label',
  labelClassName,
  labelTextClassName,
  labelId,
  labelTexts,
  onColor = FormOnColor.onwhite,
  statusDot,
  sublabel,
  sublabelWrapperClassName,
  testId,
}) => {
  const hasChildren = children && typeof children !== 'undefined';
  const labelWrapperClasses = cn(
    styles['label-wrapper'],
    { [styles['label-wrapper--no-bottom-margin']]: hasChildren, [styles['label-wrapper--after-label-children']]: afterLabelChildren },
    className
  );

  const mapLabels = (): React.ReactNode => {
    if (typeof labelTexts === 'undefined') return null;

    return labelTexts.map((labelText, index) => {
      const labelClasses = cn(
        styles.label,
        {
          [styles['label--subdued']]: labelText.type === 'subdued',
          [styles['label--on-dark']]: onColor === FormOnColor.ondark,
        },
        labelTextClassName
      );
      return (
        <span aria-hidden={labelText.hideFromScreenReader} className={labelClasses} key={index}>
          {labelText.text}
        </span>
      );
    });
  };
  const CustomTag = htmlMarkup;

  return (
    <div className={labelWrapperClasses}>
      <div>
        <CustomTag className={labelClassName} id={labelId} htmlFor={htmlFor} data-testid={testId} data-analyticsid={AnalyticsId.Label}>
          <span className={styles['label-content-wrapper']}>
            {children}
            <span className={styles.label__texts}>{mapLabels()}</span>
          </span>
        </CustomTag>
        <div className={sublabelWrapperClassName}>
          {formFieldLevel && <FormFieldTag level={formFieldLevel} />}
          {sublabel &&
            isComponent<SublabelProps>(sublabel, Sublabel) &&
            React.cloneElement(sublabel, {
              onColor: onColor as FormOnColor,
            })}
          {statusDot && isComponent<StatusDotProps>(statusDot, StatusDot) && (
            <>
              <Spacer size={'3xs'} />
              {React.cloneElement(statusDot, {
                onColor: onColor === FormOnColor.ondark ? 'ondark' : 'onwhite',
              })}
            </>
          )}
        </div>
      </div>
      {afterLabelChildren && <div className={styles['after-label-children']}>{afterLabelChildren}</div>}
    </div>
  );
};

export default Label;
