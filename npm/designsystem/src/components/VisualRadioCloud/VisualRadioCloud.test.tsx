import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import VisualRadioCloud from './VisualRadioCloud';

describe('Gitt at VisualRadioCloud skal vises', () => {
  describe('Når komponenten har radio-children', () => {
    test('Så rendres alle radioknappene', () => {
      render(
        <VisualRadioCloud name={'g'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'c'}>{'Tre'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getAllByRole('radio')).toHaveLength(3);
      expect(screen.getByRole('radio', { name: 'Ett' })).toBeVisible();
      expect(screen.getByRole('radio', { name: 'To' })).toBeVisible();
      expect(screen.getByRole('radio', { name: 'Tre' })).toBeVisible();
    });

    test('Så rendres radiogroup-rollen rundt valgene', () => {
      render(
        <VisualRadioCloud name={'g'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByRole('radiogroup')).toBeVisible();
    });

    test('Så kan radiogroup labelles via aria-labelledby', () => {
      render(
        <>
          <h2 id={'gruppe-tittel'}>{'Velg kategori'}</h2>
          <VisualRadioCloud name={'g'} aria-labelledby={'gruppe-tittel'}>
            <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          </VisualRadioCloud>
        </>
      );

      expect(screen.getByRole('radiogroup', { name: 'Velg kategori' })).toBeVisible();
    });

    test('Så kan radiogroup labelles via aria-label', () => {
      render(
        <VisualRadioCloud name={'g'} aria-label={'Velg kategori'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByRole('radiogroup', { name: 'Velg kategori' })).toBeVisible();
    });
  });

  describe('Når brukeren klikker en radioknapp', () => {
    test('Så velges den ene og de andre deselekteres', async () => {
      render(
        <VisualRadioCloud name={'g'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      await userEvent.click(screen.getByText('Ett'));

      expect(screen.getByRole('radio', { name: 'Ett' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).not.toBeChecked();

      await userEvent.click(screen.getByText('To'));

      expect(screen.getByRole('radio', { name: 'Ett' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).toBeChecked();
    });

    test('Så kalles cloud onChange med event og value', async () => {
      const onChange = vi.fn();
      render(
        <VisualRadioCloud name={'g'} onChange={onChange}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      await userEvent.click(screen.getByText('To'));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ type: 'change' }), 'b');
    });
  });

  describe('Når defaultValue er satt', () => {
    test('Så er den valgte radioknappen checked ved første render', () => {
      render(
        <VisualRadioCloud name={'g'} defaultValue={'b'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).toBeChecked();
    });
  });

  describe('Når komponenten er kontrollert', () => {
    test('Så reflekterer den value-prop', () => {
      const { rerender } = render(
        <VisualRadioCloud name={'g'} value={'a'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toBeChecked();

      rerender(
        <VisualRadioCloud name={'g'} value={'b'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).toBeChecked();
    });

    test('Så kan bruker overstyre controlled state', async () => {
      const Wrapper: React.FC = () => {
        const [val, setVal] = useState<string>('a');
        return (
          <VisualRadioCloud name={'g'} value={val} onChange={(_, v) => setVal(v)}>
            <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
            <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
          </VisualRadioCloud>
        );
      };
      render(<Wrapper />);

      expect(screen.getByRole('radio', { name: 'Ett' })).toBeChecked();

      await userEvent.click(screen.getByText('To'));

      expect(screen.getByRole('radio', { name: 'Ett' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).toBeChecked();
    });
  });

  describe('Når name er satt på cloud', () => {
    test('Så får alle radios samme name', () => {
      render(
        <VisualRadioCloud name={'kategori'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAttribute('name', 'kategori');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAttribute('name', 'kategori');
    });

    test('Så vinner radio name over name gitt til cloud', () => {
      render(
        <VisualRadioCloud name={'kategori'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'} name={'overstyrt'}>
            {'To'}
          </VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAttribute('name', 'kategori');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAttribute('name', 'overstyrt');
    });
  });

  describe('Når error er satt på cloud', () => {
    test('Så vises feilmelding og radiogroup markeres som aria-invalid', () => {
      render(
        <VisualRadioCloud name={'g'} error={'Du må velge et alternativ'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByText('Du må velge et alternativ')).toBeVisible();
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
    });

    test('Så har individuelle radioknapper feilmeldingen via aria-describedby slik at den leses ved fokus', () => {
      render(
        <VisualRadioCloud name={'g'} error={'Du må velge et alternativ'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
          <VisualRadioCloud.Radio value={'b'}>{'To'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAccessibleDescription('Du må velge et alternativ');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAccessibleDescription('Du må velge et alternativ');
    });

    test('Så vinner radios egen errorTextId over cloud sitt errorTextId', () => {
      render(
        <>
          <div id={'eget-error-id'}>{'Eget feilfelt'}</div>
          <VisualRadioCloud name={'g'} error={'Felles feilmelding'}>
            <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
            <VisualRadioCloud.Radio value={'b'} error errorTextId={'eget-error-id'}>
              {'To'}
            </VisualRadioCloud.Radio>
          </VisualRadioCloud>
        </>
      );

      expect(screen.getByRole('radiogroup')).toHaveAccessibleDescription('Felles feilmelding');
      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAccessibleDescription('Felles feilmelding');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAccessibleDescription('Eget feilfelt');
    });
  });

  describe('Når testId og errorWrapperTestId er satt', () => {
    test('Så finnes elementene via data-testid', () => {
      render(
        <VisualRadioCloud name={'g'} testId={'min-cloud'} errorWrapperTestId={'min-error-wrapper'} error={'Feil'}>
          <VisualRadioCloud.Radio value={'a'}>{'Ett'}</VisualRadioCloud.Radio>
        </VisualRadioCloud>
      );

      expect(screen.getByTestId('min-cloud')).toBeVisible();
      expect(screen.getByTestId('min-error-wrapper')).toBeVisible();
    });
  });
});
