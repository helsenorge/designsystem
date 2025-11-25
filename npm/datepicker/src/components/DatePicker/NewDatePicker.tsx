import React from 'react';

import BaseDayPicker, { BaseDayPickerProps } from './BaseDayPicker';
import DatePickerWithInput, { DatePickerWithInputProps } from './DatePickerWithInput';

interface NewDayPicker extends BaseDayPickerProps, DatePickerWithInputProps {
  standalone?: boolean;
}

const NewDayPicker = (props: NewDayPicker): React.ReactNode => {
  const { standalone = false, label, withClearButton, ...datepickerProps } = props;

  return standalone ? (
    <BaseDayPicker {...datepickerProps} />
  ) : (
    <DatePickerWithInput withClearButton={withClearButton} label={label} {...datepickerProps} />
  );
};

export default NewDayPicker;
