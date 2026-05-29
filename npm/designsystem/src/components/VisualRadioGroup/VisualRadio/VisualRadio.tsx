import classNames from 'classnames';

import type { ErrorWrapperClassNameProps } from '../../ErrorWrapper';

import VisualContent from './VisualContent';
import { AnalyticsId } from '../../../constants';
import { useIdWithFallback } from '../../../hooks/useIdWithFallback';
import { getAriaDescribedBy } from '../../../utils/accessibility';
import ErrorWrapper from '../../ErrorWrapper';
import RadioMarker from '../../RadioButton/RadioMarker/RadioMarker';

import styles from './styles.module.scss';

export type VisualRadioVariant = 'line' | 'rectangle';

export interface VisualRadioProps
  extends ErrorWrapperClassNameProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'id' | 'className' | 'children' | 'size'> {
  /** Adds custom classes to the root element. */
  className?: string;
  /** Label rendered inside the radio frame. */
  children: string;
  /** Content rendered inside the circular visual slot. */
  visualContent?: React.ReactNode;
  /** Layout variant. `line` is a thin horizontal pill, `rectangle` is a vertical card. */
  variant?: VisualRadioVariant;
  /** input id of the underlying radio */
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

const VisualRadio: React.FC<VisualRadioProps> = props => {
  const {
    className,
    children,
    visualContent,
    variant = 'line',
    inputId: inputIdProp,
    errorText,
    error = !!errorText,
    errorTextId: errorTextIdProp,
    errorWrapperClassName,
    testId,
    ref,
    ...rest
  } = props;

  const inputId = useIdWithFallback(inputIdProp);
  const errorTextId = useIdWithFallback(errorTextIdProp);

  return (
    <ErrorWrapper className={errorWrapperClassName} errorText={errorText} errorTextId={errorTextId}>
      <label
        className={classNames(
          styles['visual-radio'],
          styles[`visual-radio--variant-${variant}`],
          { [styles['visual-radio--invalid']]: error },
          className
        )}
        htmlFor={inputId}
        data-testid={testId}
        data-analyticsid={AnalyticsId.RadioButton}
      >
        {visualContent !== undefined && <VisualContent>{visualContent}</VisualContent>}
        {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props -- aria-invalid is a global ARIA state, valid on radio inputs */}
        <input
          {...rest}
          id={inputId}
          ref={ref}
          className={styles['visual-radio__input']}
          type="radio"
          checked={rest.checked}
          aria-invalid={error}
          aria-describedby={getAriaDescribedBy(props, errorTextId)}
          onChange={rest.onChange}
        />
        <span className={styles['visual-radio__frame']}>
          <span className={styles['visual-radio__label']}>{children}</span>
          <RadioMarker error={error} size={'large'} />
        </span>
      </label>
    </ErrorWrapper>
  );
};

export default VisualRadio;
