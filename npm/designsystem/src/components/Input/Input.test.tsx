import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input, { InputTypes } from './Input';
import { FormOnColor, FormSize } from '../../constants';
import Hospital from '../Icons/Hospital';
import Label from '../Label';

describe('Gitt at Input skal vises', (): void => {
  describe('Når Input rendres', (): void => {
    test('Så vises Input', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} />);

      const label = screen.getByText('Skriv noe');
      expect(label).toBeVisible();

      const input = screen.getByRole('textbox');
      expect(input).toBeVisible();
      expect(input).toHaveClass('input-container__input');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Input som disabled', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe!' }]} />} disabled />);

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Når onColor er onblueberry', (): void => {
    test('Så vises Input med onblueberry styling', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} onColor={FormOnColor.onblueberry} />);

      // eslint-disable-next-line testing-library/no-node-access
      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('input-container input-container--on-blueberry');
    });
  });
  describe('Når onColor er ondark', (): void => {
    test('Så vises Input med ondark styling', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} onColor={FormOnColor.ondark} />);

      // eslint-disable-next-line testing-library/no-node-access
      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('input-container input-container--on-dark');
    });
  });
  describe('Når transparent er true', (): void => {
    test('Så vises Input med transparent styling', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} transparent />);

      // eslint-disable-next-line testing-library/no-node-access
      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('input-container input-container--transparent');
    });
  });
  describe('Når size er large', (): void => {
    test('Så vises Input med large styling', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} size={FormSize.large} />);

      // eslint-disable-next-line testing-library/no-node-access
      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('input-container input-container--large');
    });
  });

  describe('Når Input har en default value', (): void => {
    test('Så skal default value vises', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} defaultValue={'default text'} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('default text');
    });
  });

  describe('Når Input har en placeholder value', (): void => {
    test('Så skal placeholder verdien vises', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} placeholder={'placeholder  text'} />);
      const input = screen.getByPlaceholderText('placeholder text');
      expect(input).toBeVisible();
    });
  });

  describe('Når type settes', (): void => {
    test('Så skal input ha den typen satt', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} type={InputTypes.number} />);
      const input = screen.getByRole('spinbutton');
      expect(input).toBeVisible();
    });
  });

  describe('Når icon settes', (): void => {
    test('Så rendres input med icon', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} icon={Hospital} />);
      // eslint-disable-next-line testing-library/no-node-access
      const svg = screen.getByRole('textbox').previousSibling;
      expect(svg).toHaveClass('hnds-style-icon');
    });
  });

  describe('Når iconRight er true', (): void => {
    test('Så rendres input med icon til høyre', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} icon={Hospital} iconRight />);
      // eslint-disable-next-line testing-library/no-node-access
      const svg = screen.getByRole('textbox').nextSibling;
      expect(svg).toHaveClass('hnds-style-icon');
    });
  });

  describe('Når Input har en error', (): void => {
    test('Så skal invalid styling brukes', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} error />);
      // eslint-disable-next-line testing-library/no-node-access
      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('input-container input-container--invalid');
    });
  });

  describe('Når Input har en feilmelding', (): void => {
    test('Så er feilmelding knyttet sammen med inputfeltet', (): void => {
      render(<Input label={'Navn'} inputId="navn" errorText="Navn må fylles ut" />);

      const input = screen.getByLabelText('Navn');

      expect(input).toHaveAccessibleDescription('Navn må fylles ut');
    });
  });

  describe('Når disabled er satt', (): void => {
    test('Så er input disabled', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} disabled />);

      const input = screen.getByLabelText('En fin label');
      expect(input).toBeDisabled();
    });
  });

  describe('Når readOnly er satt', (): void => {
    test('Så er input readOnly', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} readOnly />);

      const input = screen.getByLabelText('En fin label');
      expect(input).toHaveAttribute('readonly', '');
    });
  });

  describe('Når autocomplete ikke er satt', (): void => {
    test('Så er autocomplete=off', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} />);

      const input = screen.getByLabelText('En fin label');

      expect(input).toHaveAttribute('autocomplete', 'off');
    });
  });

  describe('Når autocomplete er satt', (): void => {
    test('Så er autocomplete riktig verdi', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} autoComplete="name" />);

      const input = screen.getByLabelText('En fin label');

      expect(input).toHaveAttribute('autocomplete', 'name');
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har input riktig name', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} name="custom-name" />);

      const input = screen.getByLabelText('En fin label');
      expect(input).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når placeholder-prop er satt', (): void => {
    test('Så har input riktig placeholder', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} placeholder="custom-placeholder" />);

      const input = screen.getByPlaceholderText('custom-placeholder');
      expect(input).toBeVisible();
    });
  });

  describe('Når defaultValue-prop er satt', (): void => {
    test('Så har input riktig value', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} defaultValue="custom-value" />);

      const input = screen.getByLabelText('En fin label');
      expect(input).toHaveValue('custom-value');
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er input required', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} required />);

      const input = screen.getByLabelText('En fin label');
      expect(input).toBeRequired();
    });
  });

  describe('Når antall tegn skal vises', (): void => {
    describe('Når man skriver', (): void => {
      test('Så endres teksten og antall tegn', async (): Promise<void> => {
        render(<Input label={<Label labelTexts={[{ text: 'Skriv din historie her' }]} />} maxCharacters={50} />);

        const input = screen.getByLabelText('Skriv din historie her');

        expect(screen.getByText('0/50 tegn')).toBeVisible();

        await userEvent.type(input, 'Jeg tester teksten her.');

        expect(input).toHaveValue('Jeg tester teksten her.');
        expect(screen.getByText('23/50 tegn')).toBeVisible();
      });
    });

    describe('Når man skriver for mange tegn', (): void => {
      test('Så indikeres det at input er ugyldig', async (): Promise<void> => {
        render(<Input label={<Label labelTexts={[{ text: 'Skriv din historie her' }]} />} maxCharacters={10} />);

        const input = screen.getByLabelText('Skriv din historie her');

        expect(screen.getByText('0/10 tegn')).toBeVisible();

        await userEvent.type(input, 'Jeg tester teksten her.');

        expect(input).toHaveValue('Jeg tester teksten her.');
        expect(screen.getByText('23/10 tegn')).toBeVisible();
        expect(input).toHaveAttribute('aria-invalid', 'true');
      });
    });

    describe('Når defaultValue endres', (): void => {
      test('Så oppdateres antall tegn', (): void => {
        const { rerender } = render(<Input label={'Skriv din historie her'} maxCharacters={10} />);

        expect(screen.getByText('0/10 tegn')).toBeVisible();

        rerender(<Input label={'Skriv din historie her'} maxCharacters={10} defaultValue={'foo'} />);

        expect(screen.getByText('3/10 tegn')).toBeVisible();

        const input = screen.getByLabelText('Skriv din historie her');
        expect(input).toHaveValue('foo');
      });
    });
  });
});
