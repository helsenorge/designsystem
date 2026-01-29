import { cloneElement, useState } from 'react';

import ErrorWrapper from '@helsenorge/designsystem-react/components/ErrorWrapper';
import Label, { LabelProps } from '@helsenorge/designsystem-react/components/Label';
import { isComponent } from '@helsenorge/designsystem-react/utils/component';

import TimeInputInternal from './TimeInputInternal';
import { HNDesignsystemDatePicker } from '../../../resources/Resources';
import styles from '../DatePicker.module.scss';

export interface Unsafe_TimeInputProps {
  /** Currently given time, in format hh:mm */
  value?: string;
  /** Label of the input */
  label?: React.ReactNode;
  /** Id of the input field, for connecting labels */
  id?: string;
  /** Callback for change in date */
  onChange?: (value: string) => void;
  /** Callback for blur on input field */
  onBlur?: (value: string) => void;
  /** Callback for setting error text when validating */
  errorText?: string;
  /** Wether or not to shw a clear button when there is content in the input */
  withClearButton?: boolean;
  /** Resources for component */
  resources?: Partial<HNDesignsystemDatePicker>;
  /** Sets aria-describedby on the input, for connecting labels */
  ['aria-describedby']?: string;
  /** Sets aria-labelledby on the input, for connecting labels */
  ['aria-labelledby']?: string;
}

const Unsafe_TimeInput = ({
  value,
  onChange,
  onBlur,
  errorText,
  id,
  label,
  resources,
  withClearButton = true,
  ['aria-describedby']: ariaDescribedBy,
  ['aria-labelledby']: ariaLabelledBy,
}: Unsafe_TimeInputProps): React.ReactNode => {
  const [softErrorText, setSoftErrorText] = useState<string>('');

  const labelGivenAsPropIsValidLabelComponent = isComponent<LabelProps>(label, Label);
  const legend =
    label && labelGivenAsPropIsValidLabelComponent
      ? cloneElement(label, { htmlMarkup: 'legend', labelId: label.props.labelId || 'date-legend' })
      : null;
  const legendId = labelGivenAsPropIsValidLabelComponent && label.props.labelId ? label.props.labelId : 'date-legend';

  return (
    <ErrorWrapper errorText={errorText}>
      <fieldset className={styles['date-field']} aria-labelledby={legendId}>
        {legend}
        <TimeInputInternal
          id={id}
          value={value}
          onChange={onChange}
          withClearButton={withClearButton}
          resources={resources}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          onBlur={onBlur}
          setErrorText={setSoftErrorText}
        />
        <div className={styles['date-field__soft-error-text']} role="status">
          {softErrorText}
        </div>
      </fieldset>
    </ErrorWrapper>
  );
};

export default Unsafe_TimeInput;
