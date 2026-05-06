import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Unsafe_DateAndTime from './Unsafe_DateAndTime';

const getDateInputs = (): { day: HTMLInputElement; month: HTMLInputElement; year: HTMLInputElement } => ({
  day: screen.getByLabelText('Dag') as HTMLInputElement,
  month: screen.getByLabelText('Måned') as HTMLInputElement,
  year: screen.getByLabelText('År') as HTMLInputElement,
});

const getTimeInputs = (): { hour: HTMLInputElement; minute: HTMLInputElement } => ({
  hour: screen.getByLabelText('Time') as HTMLInputElement,
  minute: screen.getByLabelText('Minutt') as HTMLInputElement,
});

const ControlledParent: React.FC<{ initial?: Date; onChangeSpy?: (v: Date | undefined) => void }> = ({ initial, onChangeSpy }) => {
  const [value, setValue] = useState<Date | undefined>(initial);
  return (
    <Unsafe_DateAndTime
      value={value}
      onChange={next => {
        onChangeSpy?.(next);
        setValue(next);
      }}
    />
  );
};

describe('Gitt at Unsafe_DateAndTime skal vises', () => {
  describe('Når initiell value har dato og tid', () => {
    it('Så vises både dato- og tidssegmenter med riktige verdier', () => {
      render(<Unsafe_DateAndTime value={new Date('2026-01-01T10:30')} />);

      const { day, month, year } = getDateInputs();
      const { hour, minute } = getTimeInputs();

      expect(day.value).toBe('01');
      expect(month.value).toBe('01');
      expect(year.value).toBe('2026');
      expect(hour.value).toBe('10');
      expect(minute.value).toBe('30');
    });
  });

  describe('Når foreldrekomponenten setter en ny Date (setValue-scenario)', () => {
    it('Så oppdateres både dato- og tidsfelt', () => {
      const { rerender } = render(<Unsafe_DateAndTime value={new Date('2026-01-01T10:00')} />);

      rerender(<Unsafe_DateAndTime value={new Date('2026-12-24T18:30')} />);

      const { day, month, year } = getDateInputs();
      const { hour, minute } = getTimeInputs();

      expect(day.value).toBe('24');
      expect(month.value).toBe('12');
      expect(year.value).toBe('2026');
      expect(hour.value).toBe('18');
      expect(minute.value).toBe('30');
    });
  });

  describe('Når brukeren først tømmer tidsfeltet og så datofeltet', () => {
    it('Så forblir begge felter tomme (regression: tid restaurerte forrige verdi etter dato-clear)', async () => {
      const user = userEvent.setup();

      render(<ControlledParent initial={new Date('2026-01-01T10:30')} />);

      // Det finnes to nullstill-knapper i DOM (én for dato, én for tid)
      const clearButtons = screen.getAllByRole('button', { name: 'Nullstill dato' });
      expect(clearButtons).toHaveLength(2);

      // Den siste i DOM er tids-clear (TimeInput rendres etter DatePicker i markupen)
      const [dateClear, timeClear] = clearButtons;

      await user.click(timeClear);
      await user.click(dateClear);

      const { day, month, year } = getDateInputs();
      const { hour, minute } = getTimeInputs();

      expect(day.value).toBe('');
      expect(month.value).toBe('');
      expect(year.value).toBe('');
      expect(hour.value).toBe('');
      expect(minute.value).toBe('');
    });
  });

  describe('Når brukeren først tømmer datofeltet og så tidsfeltet', () => {
    it('Så forblir begge felter tomme (regression: dato restaurerte forrige verdi etter tid-clear)', async () => {
      const user = userEvent.setup();

      render(<ControlledParent initial={new Date('2026-01-01T10:30')} />);

      const clearButtons = screen.getAllByRole('button', { name: 'Nullstill dato' });
      const [dateClear, timeClear] = clearButtons;

      await user.click(dateClear);
      await user.click(timeClear);

      const { day, month, year } = getDateInputs();
      const { hour, minute } = getTimeInputs();

      expect(day.value).toBe('');
      expect(month.value).toBe('');
      expect(year.value).toBe('');
      expect(hour.value).toBe('');
      expect(minute.value).toBe('');
    });
  });

  describe('Når foreldrekomponenten nullstiller value til undefined', () => {
    it('Så tømmes både dato- og tidssegmenter', () => {
      const { rerender } = render(<Unsafe_DateAndTime value={new Date('2026-01-01T10:30')} />);

      rerender(<Unsafe_DateAndTime value={undefined} />);

      const { day, month, year } = getDateInputs();
      const { hour, minute } = getTimeInputs();

      expect(day.value).toBe('');
      expect(month.value).toBe('');
      expect(year.value).toBe('');
      expect(hour.value).toBe('');
      expect(minute.value).toBe('');
    });
  });
});
