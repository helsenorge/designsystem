import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { nb } from 'date-fns/locale';

import DatePicker from './DatePicker';
import DateTime from './DateTime';
import DateTimePickerWrapper from './DateTimePickerWrapper';

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
      render(<DatePicker errorText="Vennligst velg en gyldig dato" />);
      const error = screen.getByText('Vennligst velg en gyldig dato');
      expect(error).toBeInTheDocument();
      expect(error).toHaveClass('error-wrapper__errors');
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
      render(<DateTime timeUnit="hours" error errorText="Invalid date and time" />);
      expect(screen.getByText('Invalid date and time')).toBeInTheDocument();
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
          <DatePicker label="Date" />
          <DateTime label="Time" timeUnit="hours" />
        </DateTimePickerWrapper>
      );

      const errorMessage = screen.getByText('Some error');
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveClass('error-wrapper__errors');

      const datePicker = screen.getByLabelText('Date');
      const dateTime = screen.getByLabelText('Time');
      expect(datePicker).toBeInTheDocument();
      expect(datePicker.closest('div')).toHaveClass('input-container input-container--invalid');
      expect(dateTime).toBeInTheDocument();
      expect(dateTime.closest('div')).toHaveClass('input-container input-container--invalid');
    });
  });
});
