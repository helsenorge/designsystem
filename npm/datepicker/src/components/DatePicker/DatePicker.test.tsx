import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { parse } from 'date-fns';

import DatePicker from './DatePicker';
import DateTime from './DateTime';
import DateTimePickerWrapper from './DateTimePickerWrapper';
import { validateDisabledDates, validateMinMaxDate, validateMinTimeMaxTime } from './validate-utils';

describe('Gitt at DatePicker skal vises', (): void => {
  describe('Når DatePicker rendres', () => {
    it('Så skal datofomatet settes', () => {
      render(<DatePicker label={'Velg dato'} dateFormat="dd.MM.yyyy" />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '01.01.2022' } });
      expect(input.value).toBe('01.01.2022');
    });

    it('Så skal disableDays vises riktig i datovelgeren', () => {
      render(<DatePicker label={'Velg dato'} disableDays={[new Date('2022-01-01'), new Date('2022-01-02')]} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.click(input);
      expect(screen.queryByText('1')).toBeNull();
      expect(screen.queryByText('2')).toBeNull();
    });

    it('Så skal disableWeekends vises riktig i datovelgeren', () => {
      render(<DatePicker label={'Velg dato'} disableWeekends />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.click(input);
      expect(screen.queryByText('lørdag')).toBeNull();
      expect(screen.queryByText('søndag')).toBeNull();
    });

    it('Så skal errorText vises riktig', () => {
      render(<DatePicker label="Velg dato" inputId="datepicker" errorText="Vennligst velg en gyldig dato" />);

      const datePicker = screen.getByLabelText('Velg dato');

      expect(datePicker).toHaveAccessibleDescription('Vennligst velg en gyldig dato');
    });

    it('Så skal label vises riktig', () => {
      render(<DatePicker label="Dato" />);
      expect(screen.getByLabelText('Dato')).toBeInTheDocument();
    });

    it('Så skal maxDate sette datobegrensningen riktig', () => {
      render(<DatePicker label={'Velg dato'} maxDate={new Date('2022-01-01')} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '02.01.2022' } });
      fireEvent.blur(input);
      expect(input.value).toBe('02.01.2022');
    });

    it('Så skal minDate sette datobegrensningen riktig', () => {
      render(<DatePicker label={'Velg dato'} minDate={new Date('2022-01-02')} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '01.01.2022' } });
      fireEvent.blur(input);
      expect(input.value).toBe('01.01.2022');
    });

    it('Så skal onChange trigges ved datoendring', () => {
      const handleChange = jest.fn();
      render(<DatePicker label={'Velg dato'} onChange={handleChange} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '01.01.2022' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
  describe('Når DateTime rendres', () => {
    it('Så skal label vises riktig', () => {
      render(<DateTime label={'Select date and time'} timeUnit={'hours'} />);
      const input = screen.getByLabelText('Select date and time') as HTMLInputElement;
      expect(input).toBeInTheDocument();
    });

    it('Så skal formatet til input alltid ha to tall', () => {
      render(<DateTime label={'Time'} timeUnit="minutes" />);
      const input = screen.getByLabelText('Time') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '1' } });

      expect(input.value).toBe('1');
      fireEvent.blur(input);
      expect(input.value).toBe('01');
    });

    it('Så skal onChange kalles når input endres', () => {
      const handleChange = jest.fn();
      render(<DateTime label={'Time'} timeUnit="hours" onChange={handleChange} />);
      const input = screen.getByLabelText('Time') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '12' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('Så skal disabled propen sette input feltet som disabled', () => {
      render(<DateTime label={'Time'} timeUnit="minutes" disabled />);
      const input = screen.getByLabelText('Time') as HTMLInputElement;
      expect(input).toBeDisabled();
    });

    it('Så skal error meldingen vises riktig', () => {
      render(<DateTime timeUnit="hours" error label="Time" inputId="datetime" errorText="Invalid date and time" />);

      const dateTime = screen.getByLabelText('Time');

      expect(dateTime).toHaveAccessibleDescription('Invalid date and time');
    });
  });
  describe('Når DateTimePickerWrapper rendres', () => {
    it('Så skal DateTimePickerWrapper children rendres riktig', () => {
      render(
        <DateTimePickerWrapper>
          <DatePicker label="Date" />
          <DateTime label="Time" timeUnit="hours" />
        </DateTimePickerWrapper>
      );

      const datePicker = screen.getByLabelText('Date');
      const dateTime = screen.getByLabelText('Time');
      expect(datePicker).toBeInTheDocument();
      expect(dateTime).toBeInTheDocument();
    });
    it('Så skal DateTimePickerWrapper children rendres riktig med error tekst og styling', () => {
      render(
        <DateTimePickerWrapper errorText="Some error">
          <DatePicker label="Date" inputId="datepicker" />
          <DateTime label="Time" inputId="datetime" timeUnit="hours" />
        </DateTimePickerWrapper>
      );

      const datePicker = screen.getByLabelText('Date');
      const dateTime = screen.getByLabelText('Time');

      expect(datePicker).toHaveAccessibleDescription('Some error');
      expect(dateTime).toHaveAccessibleDescription('Some error');

      expect(datePicker).toBeInTheDocument();
      expect(datePicker.closest('div')).toHaveClass('input-container input-container--invalid');
      expect(dateTime).toBeInTheDocument();
      expect(dateTime.closest('div')).toHaveClass('input-container input-container--invalid');
    });
  });
});
describe('Gitt at validateMinMax kalles', () => {
  const currentDate = '15.11.2023';
  const futureDate = '16.11.2023';
  const pastDate = '13.11.2023';
  const pastDate2 = '14.11.2023';
  const formatString = 'dd.MM.yyyy';

  const parsedFutureDate = parse(futureDate, formatString, new Date());
  const parsedPastDate = parse(pastDate, formatString, new Date());
  const parsedPastDate2 = parse(pastDate2, formatString, new Date());
  describe('Når validateMinMax feiler', () => {
    it('Så skal feilemelding returneres', () => {
      const validateResult1 = validateMinMaxDate(currentDate, 'Feil', parsedFutureDate);
      const validateResult2 = validateMinMaxDate(currentDate, 'Feil', undefined, parsedPastDate);
      const validateResult3 = validateMinMaxDate(currentDate, 'Feil', parsedPastDate, parsedPastDate2);

      expect(validateResult1).toBe('Feil');
      expect(validateResult2).toBe('Feil');
      expect(validateResult3).toBe('Feil');
    });
  });
  describe('Når validateMinMax validerer riktig', () => {
    it('Så skal true returneres', () => {
      const validateResult1 = validateMinMaxDate(currentDate, 'Feil', parsedPastDate);
      const validateResult2 = validateMinMaxDate(currentDate, 'Feil', undefined, parsedFutureDate);
      const validateResult3 = validateMinMaxDate(currentDate, 'Feil', parsedPastDate, parsedFutureDate);
      const validateSameDayResult1 = validateMinMaxDate(pastDate, 'Feil', parsedPastDate);
      const validateSameDayResult2 = validateMinMaxDate(pastDate, 'Feil', undefined, parsedPastDate);
      const validateSameDayResult3 = validateMinMaxDate(pastDate, 'Feil', parsedPastDate, parsedFutureDate);

      expect(validateResult1).toBe(true);
      expect(validateResult2).toBe(true);
      expect(validateResult3).toBe(true);
      expect(validateSameDayResult1).toBe(true);
      expect(validateSameDayResult2).toBe(true);
      expect(validateSameDayResult3).toBe(true);
    });
  });
});
describe('Gitt at validateDisabledDates kalles', () => {
  const currentDate = '15.11.2023';
  const nextDayDate = '16.11.2023';
  const formatString = 'dd.MM.yyyy';

  const parsedCurrentDate = parse(currentDate, formatString, new Date());
  const parsedNextDayDate = parse(nextDayDate, formatString, new Date());
  describe('Når validateDisabledDates feiler', () => {
    it('Så skal feilemelding returneres', () => {
      const validateResult1 = validateDisabledDates(currentDate, [parsedCurrentDate], 'Feil');

      expect(validateResult1).toBe('Feil');
    });
  });
  describe('Når validateDisabledDates validerer riktig', () => {
    it('Så skal true returneres', () => {
      const validateResult1 = validateDisabledDates(currentDate, [parsedNextDayDate], 'Feil');

      expect(validateResult1).toBe(true);
    });
  });
});
describe('Gitt at validateMinTimeMaxTime kalles', () => {
  const currentTime = { hour: 10, minute: 10 };
  const futureTime = { hour: 11, minute: 10 };
  const pastTime1 = { hour: 8, minute: 10 };
  const pastTime2 = { hour: 9, minute: 10 };
  describe('Når validateMinTimeMaxTime feiler', () => {
    it('Så skal feilemelding returneres', () => {
      const validateResult1 = validateMinTimeMaxTime(currentTime, 'Feil', futureTime);
      const validateResult2 = validateMinTimeMaxTime(currentTime, 'Feil', undefined, pastTime1);
      const validateResult3 = validateMinTimeMaxTime(currentTime, 'Feil', pastTime1, pastTime2);

      expect(validateResult1).toBe('Feil');
      expect(validateResult2).toBe('Feil');
      expect(validateResult3).toBe('Feil');
    });
  });
  describe('Når validateMinTimeMaxTime validerer riktig', () => {
    it('Så skal true returneres', () => {
      const validateResult1 = validateMinTimeMaxTime(currentTime, 'Feil', pastTime1);
      const validateResult2 = validateMinTimeMaxTime(currentTime, 'Feil', undefined, futureTime);
      const validateResult3 = validateMinTimeMaxTime(currentTime, 'Feil', pastTime1, futureTime);

      expect(validateResult1).toBe(true);
      expect(validateResult2).toBe(true);
      expect(validateResult3).toBe(true);
    });
  });
});
