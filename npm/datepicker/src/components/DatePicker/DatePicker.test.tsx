import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { nb } from 'date-fns/locale';

import DatePicker from './DatePicker';
import DateTime from './DateTime';
import DateTimePickerWrapper from './DateTimePickerWrapper';

describe('Gitt at DatePicker skal vises', (): void => {
  describe('Når DatePicker rendres', () => {
    it('Så skal datofomatet settes', () => {
      render(<DatePicker dateFormat="dd.MM.yyyy" />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '01.01.2022' } });
      expect(input.value).toBe('01.01.2022');
    });

    it('Så skal det kastes en typefeil hvis dateFormat ikke er "dd.MM.yyyy"', () => {
      // @ts-expect-error: Pass an invalid dateFormat to trigger a type error
      expect(() => render(<DatePicker dateFormat="MM/dd/yyyy" />)).toThrow(TypeError);
    });

    it('Så skal defaultMonth settes riktig', () => {
      render(<DatePicker defaultMonth={new Date('2022-01-01')} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.click(input);
      expect(screen.getByLabelText('januar 2022')).toBeInTheDocument();
    });

    it('Så skal disableDays vises riktig i datovelgeren', () => {
      render(<DatePicker disableDays={[new Date('2022-01-01'), new Date('2022-01-02')]} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.click(input);
      expect(screen.queryByText('1')).toBeNull();
      expect(screen.queryByText('2')).toBeNull();
    });

    it('Så skal disableWeekends vises riktig i datovelgeren', () => {
      render(<DatePicker disableWeekends />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.click(input);
      expect(screen.queryByText('lørdag')).toBeNull();
      expect(screen.queryByText('søndag')).toBeNull();
    });

    it('Så skal error styling vises riktig', () => {
      render(<DatePicker error />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      expect(input).toHaveClass('error');
    });

    it('Så skal errorText vises riktig', () => {
      render(<DatePicker errorText="Vennligst velg en gyldig dato" />);
      expect(screen.getByText('Vennligst velg en gyldig dato')).toBeInTheDocument();
    });

    it('Så skal footerContent rendres riktig', () => {
      render(<DatePicker footerContent={<div>Bunntekstinnhold</div>} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.click(input);
      expect(screen.getByText('Bunntekstinnhold')).toBeInTheDocument();
    });

    it('Så skal label vises riktig', () => {
      render(<DatePicker label="Dato" />);
      expect(screen.getByLabelText('Dato')).toBeInTheDocument();
    });

    it('Så skal locale vise datoteksten riktig', () => {
      render(<DatePicker locale={nb} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.click(input);
      expect(screen.getByLabelText('januar 2022')).toBeInTheDocument();
    });

    it('Så skal maxDate sette datobegrensningen riktig', () => {
      render(<DatePicker maxDate={new Date('2022-01-01')} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '02.01.2022' } });
      expect(input.value).toBe('01.01.2022');
    });

    it('Så skal minDate sette datobegrensningen riktig', () => {
      render(<DatePicker minDate={new Date('2022-01-02')} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '01.01.2022' } });
      expect(input.value).toBe('02.01.2022');
    });

    it('Så skal onChange trigges ved datoendring', () => {
      const handleChange = jest.fn();
      render(<DatePicker onChange={handleChange} />);
      const input = screen.getByLabelText('Velg dato') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '01.01.2022' } });
      expect(handleChange).toHaveBeenCalledWith(new Date('2022-01-01'));
    });
  });
  describe('Når DateTime rendres', () => {
    it('Så skal label vises riktig', () => {
      render(<DateTime label="Select date and time" timeUnit="hours" />);
      const input = screen.getByLabelText('Select date and time') as HTMLInputElement;
      expect(input).toBeInTheDocument();
    });

    it('Så skal formatet til input alltid ha to tall', () => {
      render(<DateTime timeUnit="minutes" />);
      const input = screen.getByLabelText('Date and time') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '1' } });
      expect(input.value).toBe('01');
    });

    it('Så skal onChange kalles når input endres', () => {
      const handleChange = jest.fn();
      render(<DateTime timeUnit="hours" onChange={handleChange} />);
      const input = screen.getByLabelText('Date and time') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '12' } });
      expect(handleChange).toHaveBeenCalledWith(12);
    });

    it('Så skal disabled propen sette input feltet som disabled', () => {
      render(<DateTime timeUnit="minutes" disabled />);
      const input = screen.getByLabelText('Date and time') as HTMLInputElement;
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
      expect(datePicker.closest('div')).toHaveClass('error-wrapper--with-error');
      expect(dateTime).toBeInTheDocument();
      expect(dateTime.closest('div')).toHaveClass('error-wrapper--with-error');
    });
  });
});
