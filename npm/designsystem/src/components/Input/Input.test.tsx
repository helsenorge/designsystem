import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input, { InputTypes } from './Input';
import { FormMode, FormVariant } from '../../constants';
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
      expect(input).toHaveClass('content-wrapper__input');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Input som disabled', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe!' }]} />} disabled />);

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Når FormMode er onblueberry', (): void => {
    test('Så vises Input med onblueberry styling', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} mode={FormMode.onblueberry} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--on-blueberry');
    });
  });
  describe('Når mode er ondark', (): void => {
    test('Så vises Input med ondark styling', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} mode={FormMode.ondark} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--on-dark');
    });
  });
  describe('Når transparent er true', (): void => {
    test('Så vises Input med transparent styling', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} transparent />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--transparent');
    });
  });
  describe('Når formvariant er bigform', (): void => {
    test('Så vises Input med bigform styling', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} variant={FormVariant.bigform} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--bigform');
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
      const svg = screen.getByRole('textbox').previousSibling;
      expect(svg).toHaveClass('hnds-style-icon');
    });
  });

  describe('Når iconRight er true', (): void => {
    test('Så rendres input med icon til høyre', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} icon={Hospital} iconRight />);
      const svg = screen.getByRole('textbox').nextSibling;
      expect(svg).toHaveClass('hnds-style-icon');
    });
  });

  describe('Når Input har en error', (): void => {
    test('Så skal invalid styling brukes', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'Skriv noe' }]} />} error />);
      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--invalid');
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

  describe('Når autoComplete er satt til on', (): void => {
    test('Så har input autoComplete=on', (): void => {
      render(<Input label={<Label labelTexts={[{ text: 'En fin label' }]} />} autoComplete="on" />);

      const input = screen.getByLabelText('En fin label');
      expect(input).toHaveAttribute('autoComplete', 'on');
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
  });
});
