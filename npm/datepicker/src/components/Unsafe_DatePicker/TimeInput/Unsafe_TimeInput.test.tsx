import { useState } from 'react';

import { render, screen, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { Controller, useForm } from 'react-hook-form';

import Unsafe_TimeInput from './Unsafe_TimeInput';

const HH_LABEL = 'Time';
const MM_LABEL = 'Minutt';
const CLEAR_LABEL = 'Nullstill dato';

const getInputs = (): { hh: HTMLInputElement; mm: HTMLInputElement } => ({
  hh: screen.getByLabelText(HH_LABEL) as HTMLInputElement,
  mm: screen.getByLabelText(MM_LABEL) as HTMLInputElement,
});

describe('Gitt at Unsafe_TimeInput skal vises', () => {
  describe('Når komponenten er kontrollert og rendres med en verdi', () => {
    it('Så skal segmentene vise initiell verdi', () => {
      render(<Unsafe_TimeInput value="10:30" onChange={vi.fn()} />);
      const { hh, mm } = getInputs();
      expect(hh.value).toBe('10');
      expect(mm.value).toBe('30');
    });

    it('Så skal onChange trigges når man skriver i et segment', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Unsafe_TimeInput value="" onChange={handleChange} />);

      await user.type(screen.getByLabelText(HH_LABEL), '12');
      // Expect at least one call ending in '12:'
      expect(handleChange).toHaveBeenCalled();
      expect(handleChange.mock.calls.at(-1)?.[0]).toBe('12:');
    });

    it('Så skal segmentene synkroniseres når ekstern verdi endres', () => {
      const { rerender } = render(<Unsafe_TimeInput value="10:30" onChange={vi.fn()} />);
      expect(getInputs().hh.value).toBe('10');

      rerender(<Unsafe_TimeInput value="18:45" onChange={vi.fn()} />);
      const { hh, mm } = getInputs();
      expect(hh.value).toBe('18');
      expect(mm.value).toBe('45');
    });

    it('Så skal segmentene tømmes når ekstern verdi blir tom streng', () => {
      const { rerender } = render(<Unsafe_TimeInput value="10:30" onChange={vi.fn()} />);
      rerender(<Unsafe_TimeInput value="" onChange={vi.fn()} />);
      const { hh, mm } = getInputs();
      expect(hh.value).toBe('');
      expect(mm.value).toBe('');
    });

    it('Så skal segmentene tømmes når ekstern verdi blir undefined', () => {
      const { rerender } = render(<Unsafe_TimeInput value="10:30" onChange={vi.fn()} />);
      rerender(<Unsafe_TimeInput value={undefined} onChange={vi.fn()} />);
      const { hh, mm } = getInputs();
      expect(hh.value).toBe('');
      expect(mm.value).toBe('');
    });
  });

  describe('Når brukeren klikker på nullstill-knappen', () => {
    it('Så skal onChange kalles med tom streng og inputene tømmes', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      const Wrapper = (): React.ReactNode => {
        const [value, setValue] = useState<string | undefined>('10:30');
        return (
          <Unsafe_TimeInput
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

      expect(handleChange).toHaveBeenLastCalledWith('');
      expect(getInputs().hh.value).toBe('');
      expect(getInputs().mm.value).toBe('');
    });
  });

  describe('Når komponenten er ukontrollert', () => {
    it('Så skal brukeren kunne skrive uten at forelder sender verdi tilbake', async () => {
      const user = userEvent.setup();
      render(<Unsafe_TimeInput />);

      await user.type(screen.getByLabelText(HH_LABEL), '09');
      expect(getInputs().hh.value).toBe('09');
    });
  });

  describe('Når komponenten brukes med react-hook-form', () => {
    type FormValues = { tid: string };

    const RHFHarness = ({
      defaultValues,
      onMounted,
    }: {
      defaultValues: Partial<FormValues>;
      onMounted: (api: { setValue: (name: 'tid', value: string) => void }) => void;
    }): React.ReactNode => {
      const { control, setValue } = useForm<FormValues>({ defaultValues });
      onMounted({ setValue });
      return (
        <Controller
          name="tid"
          control={control}
          render={({ field }) => <Unsafe_TimeInput value={field.value ?? undefined} onChange={field.onChange} />}
        />
      );
    };

    it('Så skal initiell verdi hentes fra defaultValues', () => {
      render(<RHFHarness defaultValues={{ tid: '10:00' }} onMounted={() => undefined} />);
      expect(getInputs().hh.value).toBe('10');
      expect(getInputs().mm.value).toBe('00');
    });

    it('Så skal segmentene oppdateres når setValue kalles eksternt', () => {
      let api: { setValue: (name: 'tid', value: string) => void } = { setValue: () => undefined };
      render(<RHFHarness defaultValues={{ tid: '10:00' }} onMounted={a => (api = a)} />);

      act(() => {
        api.setValue('tid', '18:30');
      });

      expect(getInputs().hh.value).toBe('18');
      expect(getInputs().mm.value).toBe('30');
    });

    it('Så skal segmentene tømmes når setValue kalles med tom streng (uten å falle tilbake til defaultValue)', () => {
      let api: { setValue: (name: 'tid', value: string) => void } = { setValue: () => undefined };
      render(<RHFHarness defaultValues={{ tid: '10:00' }} onMounted={a => (api = a)} />);

      act(() => {
        api.setValue('tid', '');
      });

      expect(getInputs().hh.value).toBe('');
      expect(getInputs().mm.value).toBe('');
    });

    it('Så skal nullstill-knappen tømme uten å falle tilbake til defaultValue', async () => {
      const user = userEvent.setup();
      render(<RHFHarness defaultValues={{ tid: '10:00' }} onMounted={() => undefined} />);

      await user.click(screen.getByLabelText(CLEAR_LABEL));

      expect(getInputs().hh.value).toBe('');
      expect(getInputs().mm.value).toBe('');
    });
  });
});
