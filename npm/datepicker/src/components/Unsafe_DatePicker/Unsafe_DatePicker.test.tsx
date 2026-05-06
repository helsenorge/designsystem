import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Unsafe_DatePicker from './Unsafe_DatePicker';

describe('Gitt at Unsafe_DatePicker skal vises', () => {
  describe('Når value-prop ikke er en Date-instans', () => {
    it('Så krasjer ikke komponenten (regression: value?.getTime is not a function)', () => {
      // RHF kan i praksis sende videre en string/null/undefined hvis defaultValue ikke matcher
      // Date-typen. value er typed som Date, så vi caster bevisst for å trigge runtime-pathen.
      expect(() => {
        render(<Unsafe_DatePicker value={'2026-01-01' as unknown as Date} />);
      }).not.toThrow();
      expect(() => {
        render(<Unsafe_DatePicker value={null as unknown as Date} />);
      }).not.toThrow();
    });
  });

  describe('Når foreldrekomponenten endrer value fra en Date til undefined', () => {
    it('Så blir alle inputfeltene tømt', () => {
      const { rerender } = render(<Unsafe_DatePicker value={new Date('2026-01-15')} />);

      const dayInput = screen.getByLabelText('Dag') as HTMLInputElement;
      const monthInput = screen.getByLabelText('Måned') as HTMLInputElement;
      const yearInput = screen.getByLabelText('År') as HTMLInputElement;

      expect(dayInput.value).toBe('15');
      expect(monthInput.value).toBe('01');
      expect(yearInput.value).toBe('2026');

      rerender(<Unsafe_DatePicker value={undefined} />);

      expect(dayInput.value).toBe('');
      expect(monthInput.value).toBe('');
      expect(yearInput.value).toBe('');
    });
  });

  describe('Når brukeren klikker nullstill-knappen mens forelder gjenuthever forrige value', () => {
    it('Så blir feltene blanke (regression: clear ble overskrevet av RHF defaultValue)', async () => {
      const user = userEvent.setup();

      // Simulerer en RHF-aktig forelder som ved hvert kall til onChange propagerer
      // verdien tilbake. Hvis komponenten ikke har en intern guard, vil clear-aksjonen
      // bli overskrevet av en re-render med forrige Date-verdi.
      const Parent: React.FC = () => {
        const [value, setValue] = useState<Date | undefined>(new Date('2026-01-15'));
        return <Unsafe_DatePicker value={value} onChange={setValue} />;
      };

      render(<Parent />);

      const clearButton = screen.getByRole('button', { name: 'Nullstill dato' });
      await user.click(clearButton);

      expect((screen.getByLabelText('Dag') as HTMLInputElement).value).toBe('');
      expect((screen.getByLabelText('Måned') as HTMLInputElement).value).toBe('');
      expect((screen.getByLabelText('År') as HTMLInputElement).value).toBe('');
    });
  });

  describe('Når brukeren skriver inn en dato segment for segment', () => {
    it('Så fyrer onChange med en gyldig Date kun når alle tre segmenter er komplette', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      const Parent: React.FC = () => {
        const [value, setValue] = useState<Date | undefined>(undefined);
        return (
          <Unsafe_DatePicker
            value={value}
            onChange={next => {
              handleChange(next);
              setValue(next);
            }}
          />
        );
      };

      render(<Parent />);

      const dayInput = screen.getByLabelText('Dag') as HTMLInputElement;
      const monthInput = screen.getByLabelText('Måned') as HTMLInputElement;
      const yearInput = screen.getByLabelText('År') as HTMLInputElement;

      await user.type(dayInput, '15');
      await user.type(monthInput, '01');
      await user.type(yearInput, '2026');

      // Skal til slutt ende opp med en gyldig Date
      const lastCallArg = handleChange.mock.calls.at(-1)?.[0];
      expect(lastCallArg).toBeInstanceOf(Date);
      expect((lastCallArg as Date).getFullYear()).toBe(2026);

      // Inputfeltene skal også reflektere det brukeren har skrevet
      expect(dayInput.value).toBe('15');
      expect(monthInput.value).toBe('01');
      expect(yearInput.value).toBe('2026');
    });
  });
});
