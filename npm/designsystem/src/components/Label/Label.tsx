import type { FunctionComponent } from 'react';
import React from 'react';

import cn from 'classnames';

import type { SublabelProps } from './SubLabel';
import type { FormFieldTagProps } from '../FormFieldTag';
import type { StatusDotProps } from '../StatusDot';

import { Sublabel } from './SubLabel';
import { AnalyticsId, FormOnColor } from '../../constants';
import { isComponent } from '../../utils/component';
import FormFieldTag from '../FormFieldTag';
import Spacer from '../Spacer';
import StatusDot from '../StatusDot';

import styles from './styles.module.scss';

export type LabelText = {
  hideFromScreenReader?: boolean;
  text: string;
  type?: 'normal' | 'subdued';
};

export type LabelTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'label' | 'p' | 'legend';

export interface LabelProps {
  /** Component shown after label - discourage use of this */
  afterLabelChildren?: React.ReactNode;
  /** Sets the content of the Label */
  children?: React.ReactNode;
  /** Sets a tag that describes whether the form field is required or optional */
  formFieldTag?: React.ReactNode;
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

const Label: FunctionComponent<LabelProps> = ({
  afterLabelChildren,
  children,
  className,
  formFieldTag,
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
        {(sublabel || statusDot || formFieldTag) && (
          <div className={sublabelWrapperClassName}>
            {formFieldTag && isComponent<FormFieldTagProps>(formFieldTag, FormFieldTag) && React.cloneElement(formFieldTag)}
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
        )}
      </div>
      {afterLabelChildren && <div className={styles['after-label-children']}>{afterLabelChildren}</div>}
    </div>
  );
};

export default Label;
