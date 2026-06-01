import React from 'react';

import classNames from 'classnames';

import type { VisualCheckboxProps, VisualCheckboxVariant } from './VisualCheckbox/VisualCheckbox';

import VisualCheckbox from './VisualCheckbox/VisualCheckbox';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { isComponent } from '../../utils/component';
import ErrorWrapper from '../ErrorWrapper';

import styles from './styles.module.scss';

export interface VisualCheckboxGroupProps {
  /** Items in the group. Should be VisualCheckboxGroup.VisualCheckbox elements. */
  children?: React.ReactNode;
  /** Name shared by all child VisualCheckbox elements (overridable per child) */
  name?: string;
  /** Variant applied to all child VisualCheckbox elements (overridable per child). */
  variant?: VisualCheckboxVariant;
  /** When set and the number of VisualCheckbox children exceeds this limit on the mobile breakpoint, the variant is forced to `line`. */
  mobileLineVariantLimit?: number;
  /** Error message shown above the group */
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

interface VisualCheckboxGroupComponent extends React.FC<VisualCheckboxGroupProps> {
  VisualCheckbox: typeof VisualCheckbox;
}

export const VisualCheckboxGroup: VisualCheckboxGroupComponent = props => {
  const {
    children,
    name,
    variant = 'rectangle',
    mobileLineVariantLimit,
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
  const isMobile = useIsMobileBreakpoint();

  const visualCheckboxCount = React.Children.toArray(children).filter(child =>
    isComponent<VisualCheckboxProps>(child, VisualCheckbox)
  ).length;

  const effectiveVariant: VisualCheckboxVariant | undefined =
    isMobile && mobileLineVariantLimit !== undefined && visualCheckboxCount > mobileLineVariantLimit ? 'line' : variant;

  const mapChild = (child: React.ReactNode): React.ReactNode => {
    if (isComponent<VisualCheckboxProps>(child, VisualCheckbox)) {
      return React.cloneElement(child, {
        name: child.props.name ?? name,
        variant: child.props.variant ?? effectiveVariant,
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
      <div
        className={classNames(styles['visual-checkbox-group'], {
          [styles['visual-checkbox-group--variant-line']]: effectiveVariant === 'line',
        })}
        data-testid={testId}
      >
        {React.Children.map(children, mapChild)}
      </div>
    </ErrorWrapper>
  );
};

VisualCheckboxGroup.VisualCheckbox = VisualCheckbox;

export default VisualCheckboxGroup;
