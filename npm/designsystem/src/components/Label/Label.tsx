import React, { FunctionComponent } from 'react';

import cn from 'classnames';

import { Sublabel, SublabelProps } from './SubLabel';
import { AnalyticsId, FormMode } from '../../constants';
import { isComponent } from '../../utils/component';
import Spacer from '../Spacer';
import StatusDot, { StatusDotProps } from '../StatusDot';

import styles from './styles.module.scss';

export type LabelText = {
  hideFromScreenReader?: boolean;
  text: string;
  type?: 'semibold' | 'normal';
};

export interface LabelProps extends Pick<React.InputHTMLAttributes<HTMLLabelElement>, 'disabled'> {
  /** Component shown after label - discourage use of this */
  afterLabelChildren?: React.ReactNode;
  /** Adds custom classes to the element. */
  children?: React.ReactNode;
  /** Adds custom classes to the label tag. */
  labelClassName?: string;
  /** Adds custom classes to the label text. */
  labelTextClassName?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Id that is put on the "for" attribute of the label */
  htmlFor?: string;
  /** Id som plasseres på <label/> */
  labelId?: string;
  /** Array of main label strings. Can be of type semibold or normal */
  labelTexts: LabelText[];
  /** Array of sublabel strings. Can be of type semibold or normal */
  mode?: keyof typeof FormMode;
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
    label.props.labelTexts.forEach(labelText => {
      allLabelText += !labelText.hideFromScreenReader ? labelText.text : '';
    });
  }

  return allLabelText;
};

export const renderLabel = (label: React.ReactNode, inputId: string, mode: FormMode, disabled?: boolean): React.ReactNode => {
  return (
    <>
      {label && isComponent<LabelProps>(label, Label)
        ? React.cloneElement(label, {
            htmlFor: inputId,
            mode: mode,
            disabled,
          })
        : typeof label === 'string' && (
            <Label labelTexts={[{ text: label, type: 'semibold' }]} htmlFor={inputId} mode={mode} disabled={disabled} />
          )}
    </>
  );
};

export const renderLabelAsParent = (
  label: React.ReactNode,
  children: React.ReactNode,
  inputId: string,
  mode: FormMode,
  disabled?: boolean,
  labelClassName?: string,
  labelTextClassName?: string,
  sublabelWrapperClassName?: string,
  large?: boolean
): React.ReactNode => {
  return (
    <>
      {label && isComponent<LabelProps>(label, Label)
        ? React.cloneElement(label, {
            htmlFor: inputId,
            mode: mode,
            children: children,
            disabled,
            labelClassName: cn(labelClassName, label.props.labelClassName),
            labelTextClassName: labelTextClassName,
            sublabelWrapperClassName: sublabelWrapperClassName,
            sublabel: large ? undefined : label.props.sublabel,
            statusDot: large ? undefined : label.props.statusDot,
          })
        : typeof label === 'string' && (
            <Label
              labelTexts={[{ text: label }]}
              htmlFor={inputId}
              mode={mode}
              disabled={disabled}
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
  disabled,
  htmlFor,
  labelClassName,
  labelTextClassName,
  labelId,
  labelTexts,
  mode = FormMode.onwhite,
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
    return labelTexts.map((labelText, index) => {
      const labelClasses = cn(
        styles.label,
        {
          [styles['label--semibold']]: labelText.type === 'semibold',
          [styles['label--on-dark']]: mode === FormMode.ondark,
          [styles['label--disabled']]: disabled,
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

  return (
    <div className={labelWrapperClasses}>
      <div className={styles['label-wrapper__inner']}>
        <label className={labelClassName} id={labelId} htmlFor={htmlFor} data-testid={testId} data-analyticsid={AnalyticsId.Label}>
          <span className={styles['label-content-wrapper']}>
            {children}
            <span>{mapLabels()}</span>
          </span>
        </label>
        <div className={sublabelWrapperClassName}>
          {sublabel &&
            isComponent<SublabelProps>(sublabel, Sublabel) &&
            React.cloneElement(sublabel, {
              mode: mode as FormMode,
            })}
          {statusDot && isComponent<StatusDotProps>(statusDot, StatusDot) && (
            <>
              <Spacer size={'3xs'} />
              {React.cloneElement(statusDot, {
                mode: mode === FormMode.ondark ? 'ondark' : 'onwhite',
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
