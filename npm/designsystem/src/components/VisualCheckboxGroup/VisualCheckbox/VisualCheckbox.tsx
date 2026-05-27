import { useState } from 'react';

import classNames from 'classnames';

import type { ErrorWrapperClassNameProps } from '../../ErrorWrapper';

import VisualContent from './VisualContent';
import { AnalyticsId } from '../../../constants';
import { useIdWithFallback } from '../../../hooks/useIdWithFallback';
import { getAriaDescribedBy } from '../../../utils/accessibility';
import CheckboxMarker from '../../Checkbox/CheckboxMarker/CheckboxMarker';
import ErrorWrapper from '../../ErrorWrapper';

import styles from './styles.module.scss';

export type VisualCheckboxVariant = 'line' | 'rectangle';

export interface VisualCheckboxProps
  extends ErrorWrapperClassNameProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'id' | 'className' | 'children' | 'size'> {
  /** Adds custom classes to the root element. */
  className?: string;
  /** Label rendered inside the checkbox frame. */
  children: string;
  /** Image URL (supports `fit` and `focus` query params) or any React node. */
  visualContent: React.ReactNode | string;
  /** Layout variant. `line` is a thin horizontal pill, `rectangle` is a vertical card. */
  variant?: VisualCheckboxVariant;
  /** input id of the underlying checkbox */
  inputId?: string;
  /** Activates error styling. Can be true while errorText is empty (e.g. when used in a FormGroup). */
  error?: boolean;
  /** Error text to show above the component. */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref forwarded to the underlying input element. */
  ref?: React.Ref<HTMLInputElement | null>;
}

const VisualCheckbox: React.FC<VisualCheckboxProps> = props => {
  const {
    className,
    checked,
    defaultChecked,
    children,
    visualContent,
    variant = 'line',
    inputId: inputIdProp,
    errorText,
    error = !!errorText,
    errorTextId: errorTextIdProp,
    errorWrapperClassName,
    testId,
    onChange,
    ref,
    ...rest
  } = props;

  const inputId = useIdWithFallback(inputIdProp);
  const errorTextId = useIdWithFallback(errorTextIdProp);
  const [isChecked, setIsChecked] = useState<boolean>(!!(checked ?? defaultChecked));
  const [prevChecked, setPrevChecked] = useState<boolean | undefined>(checked);
  if (prevChecked !== checked) {
    setPrevChecked(checked);
    if (checked !== undefined && checked !== isChecked) {
      setIsChecked(checked);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <ErrorWrapper className={errorWrapperClassName} errorText={errorText} errorTextId={errorTextId}>
      <label
        className={classNames(
          styles['visual-checkbox'],
          styles[`visual-checkbox--variant-${variant}`],
          {
            [styles['visual-checkbox--checked']]: isChecked,
            [styles['visual-checkbox--invalid']]: error,
          },
          className
        )}
        htmlFor={inputId}
        data-testid={testId}
        data-analyticsid={AnalyticsId.Checkbox}
      >
        <VisualContent>{visualContent}</VisualContent>
        <input
          {...rest}
          id={inputId}
          ref={ref}
          className={styles['visual-checkbox__input']}
          type="checkbox"
          checked={isChecked}
          aria-invalid={error}
          aria-describedby={getAriaDescribedBy(props, errorTextId)}
          onChange={handleChange}
        />
        <span className={styles['visual-checkbox__frame']}>
          <span className={styles['visual-checkbox__label']}>{children}</span>
          <CheckboxMarker checked={isChecked} error={error} size={'large'} />
        </span>
      </label>
    </ErrorWrapper>
  );
};

export default VisualCheckbox;
