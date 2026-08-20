import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import '@testing-library/jest-dom';

import Unsafe_ISODateAndTime from './Unsafe_ISODateAndTime';

const DD_LABEL = 'Dag';
const MM_LABEL = 'Måned';
const YYYY_LABEL = 'År';
const HH_LABEL = 'Time';
const MIN_LABEL = 'Minutt';

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

describe('Gitt at Unsafe_ISODateAndTime skal vises', () => {
  describe('Når komponenten rendres med en ISO-string som verdi', () => {
    it('Så skal alle fem segmenter vise initiell verdi', () => {
      render(<Unsafe_ISODateAndTime value="2026-01-15T10:30" onChange={vi.fn()} />);
      expectInputs('15', '01', '2026', '10', '30');
    });

    it('Så skal alle segmenter oppdateres når ekstern verdi endres', () => {
      const { rerender } = render(<Unsafe_ISODateAndTime value="2026-01-15T10:30" onChange={vi.fn()} />);
      rerender(<Unsafe_ISODateAndTime value="2026-12-24T18:45" onChange={vi.fn()} />);
      expectInputs('24', '12', '2026', '18', '45');
    });

    it('Så skal alle segmenter være tomme når verdien er en ugyldig ISO-string', () => {
      render(<Unsafe_ISODateAndTime value="ikke-en-dato" onChange={vi.fn()} />);
      expectInputs('', '', '', '', '');
    });

    it('Så skal alle segmenter være tomme når verdien er tom string', () => {
      render(<Unsafe_ISODateAndTime value="" onChange={vi.fn()} />);
      expectInputs('', '', '', '', '');
    });
  });

  describe('Når brukeren fyller ut dato og klokkeslett', () => {
    it('Så skal onChange kalles med komplett ISO-string', async () => {
      const onChange = vi.fn();
      render(<Unsafe_ISODateAndTime onChange={onChange} />);
      const i = getInputs();

      await userEvent.type(i.dd, '15');
      await userEvent.type(i.mm, '01');
      await userEvent.type(i.yyyy, '2026');
      await userEvent.type(i.hh, '10');
      await userEvent.type(i.min, '30');

      const lastValue = onChange.mock.lastCall?.[0] as string;
      expect(lastValue).toMatch(/^2026-01-15T10:30:00/);
      expect(new Date(lastValue).getTime()).toBe(new Date('2026-01-15T10:30').getTime());
    });
  });

  describe('Når brukeren endrer klokkeslettet på en eksisterende verdi', () => {
    it('Så skal onChange kalles med oppdatert ISO-string', async () => {
      const onChange = vi.fn();
      render(<Unsafe_ISODateAndTime value="2026-01-15T10:30" onChange={onChange} />);
      const i = getInputs();

      await userEvent.clear(i.hh);
      await userEvent.type(i.hh, '18');

      const lastValue = onChange.mock.lastCall?.[0] as string;
      expect(new Date(lastValue).getTime()).toBe(new Date('2026-01-15T18:30').getTime());
    });
  });

  describe('Når datoen tømmes', () => {
    it('Så skal onChange kalles med tom string', async () => {
      const onChange = vi.fn();
      render(<Unsafe_ISODateAndTime value="2026-01-15T10:30" onChange={onChange} />);
      const i = getInputs();

      await userEvent.clear(i.dd);
      await userEvent.clear(i.mm);
      await userEvent.clear(i.yyyy);

      expect(onChange.mock.lastCall?.[0]).toBe('');
    });
  });

  describe('Når errorText er satt', () => {
    it('Så skal feilmeldingen vises', () => {
      render(<Unsafe_ISODateAndTime errorText="Du må velge en dato" onChange={vi.fn()} />);
      expect(screen.getByText('Du må velge en dato')).toBeVisible();
    });
  });
});
