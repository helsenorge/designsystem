import React, { useState } from 'react';

import ReactDatePicker from 'react-datepicker';

import styles from './styles.module.scss';

interface DatePickerProps {
  /** Sets the data-testid attribute. */
  testId?: string;
}

const DatePicker: React.FC<DatePickerProps> = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return <ReactDatePicker selected={startDate} onChange={date => setStartDate(date)} />;
};

export default DatePicker;
