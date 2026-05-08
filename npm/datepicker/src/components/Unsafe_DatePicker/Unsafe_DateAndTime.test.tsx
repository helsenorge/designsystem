import { render, screen, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import '@testing-library/jest-dom';
import { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import Unsafe_DateAndTime from './Unsafe_DateAndTime';

const DD_LABEL = 'Dag';
const MM_LABEL = 'Måned';
const YYYY_LABEL = 'År';
const HH_LABEL = 'Time';
const MIN_LABEL = 'Minutt';
const CLEAR_LABEL = 'Nullstill dato';

const getInputs = (): {
  dd: HTMLInputElement;
  mm: HTMLInputElement;
  yyyy: HTMLInputElement;
  hh: HTMLInputElement;
  min: HTMLInputElement;
} => ({
  dd: screen.getByLabelText(DD_LABEL) as HTMLInputElement,
  mm: screen.getByLabelText(MM_LABEL) as HTMLInputElement,
  yyyy: screen.getByLabelText(YYYY_LABEL) as HTMLInputElement,
  hh: screen.getByLabelText(HH_LABEL) as HTMLInputElement,
  min: screen.getByLabelText(MIN_LABEL) as HTMLInputElement,
});

const expectInputs = (dd: string, mm: string, yyyy: string, hh: string, min: string): void => {
  const i = getInputs();
  expect(i.dd.value).toBe(dd);
  expect(i.mm.value).toBe(mm);
  expect(i.yyyy.value).toBe(yyyy);
  expect(i.hh.value).toBe(hh);
  expect(i.min.value).toBe(min);
};

describe('Gitt at Unsafe_DateAndTime skal vises', () => {
  describe('Når komponenten er kontrollert og rendres med en verdi', () => {
    it('Så skal alle fem segmenter vise initiell verdi', () => {
      render(<Unsafe_DateAndTime value={new Date('2026-01-15T10:30')} onChange={vi.fn()} />);
      expectInputs('15', '01', '2026', '10', '30');
    });

    it('Så skal alle segmenter oppdateres når ekstern verdi endres', () => {
      const { rerender } = render(<Unsafe_DateAndTime value={new Date('2026-01-15T10:30')} onChange={vi.fn()} />);
      rerender(<Unsafe_DateAndTime value={new Date('2026-12-24T18:45')} onChange={vi.fn()} />);
      expectInputs('24', '12', '2026', '18', '45');
    });

    it('Så skal alle segmenter tømmes når ekstern verdi blir undefined', () => {
      const { rerender } = render(<Unsafe_DateAndTime value={new Date('2026-01-15T10:30')} onChange={vi.fn()} />);
      rerender(<Unsafe_DateAndTime value={undefined} onChange={vi.fn()} />);
      expectInputs('', '', '', '', '');
    });
  });

  describe('Når brukeren klikker på nullstill-knappen for tid', () => {
    it('Så skal tid tømmes mens dato beholdes', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      const Wrapper = (): React.ReactNode => {
        const [value, setValue] = useState<Date | undefined>(new Date('2026-01-15T10:30'));
        return (
          <Unsafe_DateAndTime
            value={value}
            onChange={next => {
              setValue(next);
              handleChange(next);
            }}
          />
        );
      };
      render(<Wrapper />);

      // The time input has the second clear button (date is first in DOM order).
      const clearButtons = screen.getAllByLabelText(CLEAR_LABEL);
      await user.click(clearButtons[1]);

      expect(getInputs().hh.value).toBe('');
      expect(getInputs().min.value).toBe('');
      expect(getInputs().dd.value).toBe('15');
    });
  });

  describe('Når brukeren skriver i tid-feltet (regresjonstest for echo-back guard)', () => {
    it('Så skal delvis innskrevet tid bevares selv om forelder ekkoer tilbake en sammenslått Date', async () => {
      const user = userEvent.setup();
      const Wrapper = (): React.ReactNode => {
        const [value, setValue] = useState<Date | undefined>(new Date('2026-01-15T10:00'));
        return <Unsafe_DateAndTime value={value} onChange={setValue} />;
      };
      render(<Wrapper />);

      // Erase a digit from the minute field; user is now mid-edit at '0' / partial.
      const min = screen.getByLabelText(MIN_LABEL);
      await user.clear(min);
      await user.type(min, '3');

      // The value still echoes back something, but the user typed '3' — the field must
      // preserve '3', not jump to '03' or back to '00' from the previous default-merge.
      expect(min.value).toBe('3');
    });
  });

  describe('Når komponenten brukes med react-hook-form', () => {
    type FormValues = { avtale: Date | null };

    const RHFHarness = ({
      defaultValues,
      onMounted,
    }: {
      defaultValues: Partial<FormValues>;
      onMounted: (api: { setValue: (name: 'avtale', value: Date | null) => void }) => void;
    }): React.ReactNode => {
      const { control, setValue } = useForm<FormValues>({ defaultValues });
      onMounted({ setValue });
      return (
        <Controller
          name="avtale"
          control={control}
          render={({ field }) => <Unsafe_DateAndTime value={field.value ?? undefined} onChange={val => field.onChange(val ?? null)} />}
        />
      );
    };

    it('Så skal initiell verdi hentes fra defaultValues', () => {
      render(<RHFHarness defaultValues={{ avtale: new Date('2026-01-15T10:30') }} onMounted={() => undefined} />);
      expectInputs('15', '01', '2026', '10', '30');
    });

    it('Så skal segmentene oppdateres når setValue kalles eksternt', () => {
      let api: { setValue: (name: 'avtale', value: Date | null) => void } = { setValue: () => undefined };
      render(<RHFHarness defaultValues={{ avtale: new Date('2026-01-15T10:30') }} onMounted={a => (api = a)} />);

      act(() => {
        api.setValue('avtale', new Date('2026-12-24T18:45'));
      });

      expectInputs('24', '12', '2026', '18', '45');
    });

    it('Så skal alle fem segmenter tømmes når setValue kalles med null (uten å falle tilbake til defaultValue)', () => {
      let api: { setValue: (name: 'avtale', value: Date | null) => void } = { setValue: () => undefined };
      render(<RHFHarness defaultValues={{ avtale: new Date('2026-01-15T10:30') }} onMounted={a => (api = a)} />);

      act(() => {
        api.setValue('avtale', null);
      });

      expectInputs('', '', '', '', '');
    });

    it('Så skal nullstilling av tid-feltet ikke falle tilbake til defaultValue', async () => {
      const user = userEvent.setup();
      render(<RHFHarness defaultValues={{ avtale: new Date('2026-01-15T10:30') }} onMounted={() => undefined} />);

      const clearButtons = screen.getAllByLabelText(CLEAR_LABEL);
      await user.click(clearButtons[1]);

      // Time should be cleared, not snapped back to '10:30' via RHF's defaultValue echo.
      expect(getInputs().hh.value).toBe('');
      expect(getInputs().min.value).toBe('');
    });
  });
});
