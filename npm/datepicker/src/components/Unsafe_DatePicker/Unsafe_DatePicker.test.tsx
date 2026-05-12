import { useState } from 'react';

import { render, screen, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { Controller, useForm } from 'react-hook-form';

import Unsafe_DatePicker from './Unsafe_DatePicker';

const DD_LABEL = 'Dag';
const MM_LABEL = 'Måned';
const YYYY_LABEL = 'År';
const CLEAR_LABEL = 'Nullstill dato';
const CALENDAR_BUTTON_LABEL = 'Åpne datovelger';

const getInputs = (): { dd: HTMLInputElement; mm: HTMLInputElement; yyyy: HTMLInputElement } => ({
  dd: screen.getByLabelText(DD_LABEL) as HTMLInputElement,
  mm: screen.getByLabelText(MM_LABEL) as HTMLInputElement,
  yyyy: screen.getByLabelText(YYYY_LABEL) as HTMLInputElement,
});

const expectInputs = (dd: string, mm: string, yyyy: string): void => {
  const inputs = getInputs();
  expect(inputs.dd.value).toBe(dd);
  expect(inputs.mm.value).toBe(mm);
  expect(inputs.yyyy.value).toBe(yyyy);
};

describe('Gitt at Unsafe_DatePicker skal vises', () => {
  describe('Når komponenten er kontrollert og rendres med en verdi', () => {
    it('Så skal segmentene vise initiell verdi', () => {
      render(<Unsafe_DatePicker value={new Date('2026-01-15')} onChange={vi.fn()} />);
      expectInputs('15', '01', '2026');
    });

    it('Så skal onChange kalles med en parsed Date når en komplett dato skrives inn', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Unsafe_DatePicker value={undefined} onChange={handleChange} />);

      await user.type(screen.getByLabelText(DD_LABEL), '15');
      await user.type(screen.getByLabelText(MM_LABEL), '01');
      await user.type(screen.getByLabelText(YYYY_LABEL), '2026');

      const lastCall = handleChange.mock.calls.at(-1)?.[0] as Date | undefined;
      expect(lastCall).toBeInstanceOf(Date);
      expect(lastCall?.getFullYear()).toBe(2026);
      expect(lastCall?.getMonth()).toBe(0);
      expect(lastCall?.getDate()).toBe(15);
    });

    it('Så skal segmentene synkroniseres når ekstern verdi endres', () => {
      const { rerender } = render(<Unsafe_DatePicker value={new Date('2026-01-15')} onChange={vi.fn()} />);
      expectInputs('15', '01', '2026');

      rerender(<Unsafe_DatePicker value={new Date('2026-12-24')} onChange={vi.fn()} />);
      expectInputs('24', '12', '2026');
    });

    it('Så skal segmentene tømmes når ekstern verdi blir undefined', () => {
      const { rerender } = render(<Unsafe_DatePicker value={new Date('2026-01-15')} onChange={vi.fn()} />);
      rerender(<Unsafe_DatePicker value={undefined} onChange={vi.fn()} />);
      expectInputs('', '', '');
    });
  });

  describe('Når brukeren klikker på nullstill-knappen', () => {
    it('Så skal onChange kalles med undefined og inputene tømmes', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      const Wrapper = (): React.ReactNode => {
        const [value, setValue] = useState<Date | null | undefined>(new Date('2026-01-15'));
        return (
          <Unsafe_DatePicker
            value={value}
            onChange={next => {
              setValue(next);
              handleChange(next);
            }}
          />
        );
      };
      render(<Wrapper />);

      await user.click(screen.getByLabelText(CLEAR_LABEL));

      expect(handleChange).toHaveBeenLastCalledWith(null);
      expectInputs('', '', '');
    });
  });

  describe('Når ekstern verdi endres flere ganger (regresjonstest for echo-back guard)', () => {
    it('Så skal segmentene tømmes etter sekvens: tøm → sett Date → sett undefined', () => {
      const { rerender } = render(<Unsafe_DatePicker value={undefined} onChange={vi.fn()} />);

      // 1. Start cleared
      expectInputs('', '', '');

      // 2. External setValue with a Date should populate segments
      rerender(<Unsafe_DatePicker value={new Date('2026-12-24')} onChange={vi.fn()} />);
      expectInputs('24', '12', '2026');

      // 3. External setValue with undefined should clear (this used to fail because
      //    lastSentValueTime stayed `undefined` after the initial clear, treating the
      //    new `undefined` as our own echo).
      rerender(<Unsafe_DatePicker value={undefined} onChange={vi.fn()} />);
      expectInputs('', '', '');
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
          render={({ field }) => <Unsafe_DatePicker value={field.value ?? undefined} onChange={val => field.onChange(val ?? null)} />}
        />
      );
    };

    it('Så skal initiell verdi hentes fra defaultValues', () => {
      render(<RHFHarness defaultValues={{ avtale: new Date('2026-01-15') }} onMounted={() => undefined} />);
      expectInputs('15', '01', '2026');
    });

    it('Så skal segmentene oppdateres når setValue kalles eksternt med en ny Date', () => {
      let api: { setValue: (name: 'avtale', value: Date | null) => void } = { setValue: () => undefined };
      render(<RHFHarness defaultValues={{ avtale: new Date('2026-01-15') }} onMounted={a => (api = a)} />);

      act(() => {
        api.setValue('avtale', new Date('2026-12-24'));
      });

      expectInputs('24', '12', '2026');
    });

    it('Så skal segmentene tømmes når setValue kalles med null (uten å falle tilbake til defaultValue)', () => {
      let api: { setValue: (name: 'avtale', value: Date | null) => void } = { setValue: () => undefined };
      render(<RHFHarness defaultValues={{ avtale: new Date('2026-01-15') }} onMounted={a => (api = a)} />);

      act(() => {
        api.setValue('avtale', null);
      });

      expectInputs('', '', '');
    });

    it('Så skal nullstill-knappen tømme uten å falle tilbake til defaultValue (når forbruker mapper undefined → null)', async () => {
      const user = userEvent.setup();
      render(<RHFHarness defaultValues={{ avtale: new Date('2026-01-15') }} onMounted={() => undefined} />);

      await user.click(screen.getByLabelText(CLEAR_LABEL));

      expectInputs('', '', '');
    });
  });

  describe('Når onBlur er satt', () => {
    it('Så skal onBlur kalles med en parsed Date når brukeren forlater feltet etter å ha skrevet en komplett dato', async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      render(
        <>
          <Unsafe_DatePicker value={undefined} onChange={vi.fn()} onBlur={handleBlur} />
          <button type="button">{'Annet element'}</button>
        </>
      );

      await user.type(screen.getByLabelText(DD_LABEL), '15');
      await user.type(screen.getByLabelText(MM_LABEL), '01');
      await user.type(screen.getByLabelText(YYYY_LABEL), '2026');
      await user.click(screen.getByRole('button', { name: 'Annet element' }));

      const lastCall = handleBlur.mock.calls.at(-1)?.[0] as Date | null | undefined;
      expect(lastCall).toBeInstanceOf(Date);
      expect((lastCall as Date).getFullYear()).toBe(2026);
      expect((lastCall as Date).getMonth()).toBe(0);
      expect((lastCall as Date).getDate()).toBe(15);
    });

    it('Så skal onBlur kalles med null når brukeren forlater et tomt felt', async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      render(
        <>
          <Unsafe_DatePicker value={undefined} onChange={vi.fn()} onBlur={handleBlur} />
          <button type="button">{'Annet element'}</button>
        </>
      );

      await user.click(screen.getByLabelText(DD_LABEL));
      await user.click(screen.getByRole('button', { name: 'Annet element' }));

      expect(handleBlur).toHaveBeenLastCalledWith(null);
    });

    it('Så skal onBlur ikke kalles når brukeren tabber mellom dd, mm og yyyy-segmentene', async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      render(<Unsafe_DatePicker value={undefined} onChange={vi.fn()} onBlur={handleBlur} />);

      await user.click(screen.getByLabelText(DD_LABEL));
      await user.tab();
      await user.tab();

      expect(handleBlur).not.toHaveBeenCalled();
    });

    it('Så skal onBlur kalles med valgt dato når brukeren velger en dag i popup', async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      render(<Unsafe_DatePicker value={new Date('2026-01-15')} onChange={vi.fn()} onBlur={handleBlur} />);

      await user.click(screen.getByLabelText(CALENDAR_BUTTON_LABEL));
      await user.click(screen.getByRole('button', { name: /20\.\s*januar/i }));

      const lastCall = handleBlur.mock.calls.at(-1)?.[0] as Date | null | undefined;
      expect(lastCall).toBeInstanceOf(Date);
      expect((lastCall as Date).getFullYear()).toBe(2026);
      expect((lastCall as Date).getMonth()).toBe(0);
      expect((lastCall as Date).getDate()).toBe(20);
    });

    it('Så skal onBlur kalles når popup lukkes med Escape', async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      render(<Unsafe_DatePicker value={new Date('2026-01-15')} onChange={vi.fn()} onBlur={handleBlur} />);

      await user.click(screen.getByLabelText(CALENDAR_BUTTON_LABEL));
      await user.keyboard('{Escape}');

      expect(handleBlur).toHaveBeenCalled();
      const lastCall = handleBlur.mock.calls.at(-1)?.[0] as Date | null | undefined;
      expect(lastCall).toBeInstanceOf(Date);
      expect((lastCall as Date).getDate()).toBe(15);
    });
  });
});
