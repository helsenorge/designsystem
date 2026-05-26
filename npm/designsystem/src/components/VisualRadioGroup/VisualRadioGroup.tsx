import React from 'react';

import classNames from 'classnames';

import type { VisualRadioProps, VisualRadioVariant } from './VisualRadio/VisualRadio';

import VisualRadio from './VisualRadio/VisualRadio';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { isComponent } from '../../utils/component';
import ErrorWrapper from '../ErrorWrapper';

import styles from './styles.module.scss';

export interface VisualRadioGroupProps {
  /** Items in the group. Should be VisualRadioGroup.VisualRadio elements. */
  children?: React.ReactNode;
  /** Name shared by all child VisualRadio elements (overridable per child). Auto-generated if omitted. */
  name?: string;
  /** Selected value (controlled). */
  value?: string;
  /** Initial selected value (uncontrolled). */
  defaultValue?: string;
  /** Called when the selected value changes. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Variant applied to all child VisualRadio elements (overridable per child). */
  variant?: VisualRadioVariant;
  /** When set and the number of VisualRadio children exceeds this limit on the mobile breakpoint, the variant is forced to `line`. */
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

interface VisualRadioGroupComponent extends React.FC<VisualRadioGroupProps> {
  VisualRadio: typeof VisualRadio;
}

export const VisualRadioGroup: VisualRadioGroupComponent = props => {
  const {
    children,
    name: nameProp,
    value,
    defaultValue,
    onChange,
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
  const name = useIdWithFallback(nameProp);
  const isMobile = useIsMobileBreakpoint();

  const childArray = React.Children.toArray(children);
  const radioChildren = childArray.filter((child): child is React.ReactElement<VisualRadioProps> =>
    isComponent<VisualRadioProps>(child, VisualRadio)
  );

  const initialSelected =
    value ?? defaultValue ?? radioChildren.find(child => child.props.defaultChecked || child.props.checked)?.props.value?.toString();

  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(initialSelected);
  const [prevValue, setPrevValue] = React.useState<string | undefined>(value);
  if (prevValue !== value) {
    setPrevValue(value);
    if (value !== undefined && value !== selectedValue) {
      setSelectedValue(value);
    }
  }

  const effectiveVariant: VisualRadioVariant | undefined =
    isMobile && mobileLineVariantLimit !== undefined && radioChildren.length > mobileLineVariantLimit ? 'line' : variant;

  const mapChild = (child: React.ReactNode): React.ReactNode => {
    if (isComponent<VisualRadioProps>(child, VisualRadio)) {
      const childValue = child.props.value?.toString();
      const isSelected = selectedValue !== undefined && childValue !== undefined && childValue === selectedValue;
      const childOnChange = child.props.onChange;

      return React.cloneElement(child, {
        name: child.props.name ?? name,
        variant: child.props.variant ?? effectiveVariant,
        error: !!error || child.props.error,
        errorTextId: child.props.errorTextId ?? errorTextId,
        checked: isSelected,
        onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
          if (childValue !== undefined) {
            setSelectedValue(childValue);
          }
          childOnChange?.(e);
          if (childValue !== undefined) {
            onChange?.(e, childValue);
          }
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
        className={classNames(styles['visual-radio-group'], {
          [styles['visual-radio-group--variant-line']]: effectiveVariant === 'line',
        })}
        data-testid={testId}
        role={'radiogroup'}
      >
        {React.Children.map(children, mapChild)}
      </div>
    </ErrorWrapper>
  );
};

VisualRadioGroup.VisualRadio = VisualRadio;

export default VisualRadioGroup;
