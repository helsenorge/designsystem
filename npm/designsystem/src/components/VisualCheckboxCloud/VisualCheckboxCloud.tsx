import React from 'react';

import classNames from 'classnames';

import type { CheckboxProps } from './Checkbox/Checkbox';

import Checkbox from './Checkbox/Checkbox';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { isComponent } from '../../utils/component';
import ErrorWrapper from '../ErrorWrapper';

import styles from './styles.module.scss';

export interface VisualCheckboxCloudProps {
  /** Items in the cloud. Should be VisualCheckboxCloud.Checkbox elements. */
  children?: React.ReactNode;
  /** Name shared by all child Checkbox elements (overridable per child) */
  name?: string;
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
}

interface VisualCheckboxCloudComponent extends React.FC<VisualCheckboxCloudProps> {
  Checkbox: typeof Checkbox;
}

export const VisualCheckboxCloud: VisualCheckboxCloudComponent = props => {
  const {
    children,
    name,
    error,
    errorTextId: errorTextIdProp,
    renderError = true,
    errorMessageRef,
    className,
    errorWrapperClassName,
    testId,
    errorWrapperTestId,
  } = props;

  const errorTextId = useIdWithFallback(errorTextIdProp);

  const mapChild = (child: React.ReactNode): React.ReactNode => {
    if (isComponent<CheckboxProps>(child, Checkbox)) {
      return React.cloneElement(child, {
        name: child.props.name ?? name,
        error: !!error || child.props.error,
        errorTextId: child.props.errorTextId ?? errorTextId,
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
      <div className={styles['visual-checkbox-cloud']} data-testid={testId}>
        {React.Children.map(children, mapChild)}
      </div>
    </ErrorWrapper>
  );
};

VisualCheckboxCloud.Checkbox = Checkbox;

export default VisualCheckboxCloud;
