import React, { useState } from 'react';

import classNames from 'classnames';

import type { RadioProps } from './Radio/Radio';

import Radio from './Radio/Radio';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { isComponent } from '../../utils/component';
import ErrorWrapper from '../ErrorWrapper';

import styles from './styles.module.scss';

export interface VisualRadioCloudProps {
  /** Items in the cloud. Should be VisualRadioCloud.Radio elements. */
  children?: React.ReactNode;
  /** Name shared by all child Radio elements (overridable per child). Required for native form grouping. */
  name?: string;
  /** Selected value (controlled). */
  value?: string;
  /** Initial selected value (uncontrolled). */
  defaultValue?: string;
  /** Called when the selected value changes. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Error message shown above the cloud */
  error?: string;
  /** Error text id (auto-generated if omitted) */
  errorTextId?: string;
  /** Renders the error component (Default: true) */
  renderError?: boolean;
  /** Ref passed to the error message element */
  errorMessageRef?: React.Ref<HTMLDivElement | null>;
  /** Adds custom classes to the root element. */
  className?: string;
  /** Adds custom classes to the errorWrapper */
  errorWrapperClassName?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets the data-testid attribute for the error wrapper */
  errorWrapperTestId?: string;
  /** Accessible label for the radiogroup. Use this or `aria-labelledby` when no external `<legend>` labels the group. */
  'aria-label'?: string;
  /** Id of element labelling the radiogroup (e.g. an external Title/legend). */
  'aria-labelledby'?: string;
}

interface VisualRadioCloudComponent extends React.FC<VisualRadioCloudProps> {
  Radio: typeof Radio;
}

export const VisualRadioCloud: VisualRadioCloudComponent = props => {
  const {
    children,
    name,
    value,
    defaultValue,
    onChange,
    error,
    errorTextId: errorTextIdProp,
    renderError = true,
    errorMessageRef,
    className,
    errorWrapperClassName,
    testId,
    errorWrapperTestId,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  } = props;

  const errorTextId = useIdWithFallback(errorTextIdProp);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value ?? defaultValue);
  const [prevValue, setPrevValue] = useState<string | undefined>(value);
  if (prevValue !== value) {
    setPrevValue(value);
    if (value !== undefined && value !== selectedValue) {
      setSelectedValue(value);
    }
  }

  const mapChild = (child: React.ReactNode): React.ReactNode => {
    if (isComponent<RadioProps>(child, Radio)) {
      const isSelected = selectedValue !== undefined && child.props.value === selectedValue;
      return React.cloneElement(child, {
        name: child.props.name ?? name,
        checked: isSelected,
        error: !!error || child.props.error,
        errorTextId: child.props.errorTextId ?? errorTextId,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedValue(child.props.value);
          child.props.onChange?.(e);
          onChange?.(e, child.props.value);
        },
      });
    }
    return child;
  };

  return (
    <ErrorWrapper
      className={classNames(errorWrapperClassName, className)}
      errorText={error}
      errorTextId={errorTextId}
      renderError={renderError}
      errorMessageRef={errorMessageRef}
      testId={errorWrapperTestId}
    >
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorTextId : undefined}
        className={styles['visual-radio-cloud']}
        data-testid={testId}
      >
        {React.Children.map(children, mapChild)}
      </div>
    </ErrorWrapper>
  );
};

VisualRadioCloud.Radio = Radio;

export default VisualRadioCloud;
