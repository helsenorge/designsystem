import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import RadioButton from './RadioButton';
import { FormMode, FormSize } from '../../constants';
import FormGroup from '../FormGroup';
import Label from '../Label';

describe('Gitt at RadioButton skal vises', (): void => {
  describe('Når RadioButton rendres', (): void => {
    test('Så vises RadioButton', (): void => {
      render(<RadioButton inputId={'test01'} label={<Label labelTexts={[{ text: 'Radio1' }]} />} />);

      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;
      expect(label).toBeVisible();
      expect(label).toHaveClass('radio-button-label');

      const input = screen.getByRole('radio');
      expect(input).toBeVisible();
      expect(input).toHaveClass('radio-button');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises RadioButton som disabled', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'Radio1' }]} />} disabled />);

      const input = screen.getByRole('radio');
      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;
      expect(input).toBeDisabled();
      expect(label).toHaveClass('radio-button-label radio-button-label--disabled');
    });
  });

  describe('Når mode er onBlueberry', (): void => {
    test('Så vises RadioButton med onBlueberry styling', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'Radio1' }]} />} mode={FormMode.onblueberry} />);

      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;
      expect(label).toHaveClass('radio-button-label');
    });
  });
  describe('Når mode er onDark', (): void => {
    test('Så vises RadioButton med onDark styling', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'Radio1' }]} />} mode={FormMode.ondark} />);

      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;
      expect(label).toHaveClass('radio-button-label radio-button-label--on-dark');
    });
  });

  describe('Når size er large', (): void => {
    test('Så vises RadioButton med large styling', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'Radio1' }]} />} size={FormSize.large} />);

      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;
      expect(label).toHaveClass('radio-button-label radio-button-label__large');
    });
  });

  describe('Når size er large', (): void => {
    test('Så vises RadioButton checked state riktig styling', (): void => {
      render(
        <FormGroup legend={'onwhite'} name="radio1" mode={'onwhite'} size={'large'}>
          <RadioButton label={<Label labelTexts={[{ text: 'Radio1' }]} />} />
          <RadioButton label={<Label labelTexts={[{ text: 'Radio2' }]} />} />
        </FormGroup>
      );

      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;
      fireEvent.click(screen.getByText('Radio1'));

      expect(label).toHaveClass('radio-button-label radio-button-label__large radio-button-label__large--selected');

      const label2 = screen.getByText('Radio2').parentElement?.parentElement?.parentElement;
      fireEvent.click(screen.getByText('Radio2'));

      expect(label).toHaveClass('radio-button-label radio-button-label__large');
      expect(label2).toHaveClass('radio-button-label radio-button-label__large radio-button-label__large--selected');
    });
  });

  describe('Når startChecked er true', (): void => {
    test('Så vises RadioButton som checked', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'Radio1' }]} />} defaultChecked />);

      const input = screen.getByRole('radio');
      expect(input).toHaveProperty('checked', true);
    });
  });

  describe('Når RadioButton trykkes på', (): void => {
    test('Så vises RadioButton som checked', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'Radio1' }]} />} />);

      fireEvent.click(screen.getByText('Radio1'));

      const input = screen.getByRole('radio');
      expect(input).toHaveProperty('checked', true);
    });
  });

  describe('Når RadioButton får satt error', (): void => {
    test('Så vises RadioButton med indre error styling, uten ytre error styling', (): void => {
      render(<RadioButton testId={'test01'} label={<Label labelTexts={[{ text: 'Radio1' }]} />} error />);

      // Indre styling
      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;

      expect(label).toHaveClass('radio-button-label radio-button-label--invalid');

      // Ytre styling
      const wrapper = screen.getByTestId('test01');
      expect(wrapper).toHaveClass('radio-button-wrapper');
    });
  });

  describe('Når RadioButton får satt errorText', (): void => {
    test('Så vises RadioButton med errormelding i tilleg til indre og ytre error styling', (): void => {
      render(
        <RadioButton testId={'test01'} inputId="radio01" label={<Label labelTexts={[{ text: 'Radio1' }]} />} errorText={'error error!'} />
      );

      const radioButton = screen.getByLabelText('Radio1');

      expect(radioButton).toHaveAccessibleDescription('error error!');

      // Indre styling
      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;

      expect(label).toHaveClass('radio-button-label radio-button-label--invalid');

      // Ytre styling
      const wrapper = screen.getByTestId('test01');
      expect(wrapper).toHaveClass('radio-button-wrapper radio-button-wrapper--with-error');
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har input riktig name', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'En fin label' }]} />} name="custom-name" />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når value-prop er satt', (): void => {
    test('Så har input riktig value', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'En fin label' }]} />} value="custom-value" />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveAttribute('value', 'custom-value');
    });
  });

  describe('Når disabled er satt', (): void => {
    test('Så er input disabled', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'En fin label' }]} />} disabled />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toBeDisabled();
    });
  });

  describe('Når defaultChecked er satt', (): void => {
    test('Så er input checked', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'En fin label' }]} />} defaultChecked />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveAttribute('checked', '');
    });
  });

  describe('Når radiobutton er controlled', (): void => {
    test('Så kan den settes checked', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'En fin label' }]} />} checked={true} />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveProperty('checked', true);
    });

    test('Så kan den settes unchecked', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'En fin label' }]} />} checked={false} />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveProperty('checked', false);
    });

    test('Så er den default unchecked', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'En fin label' }]} />} />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveProperty('checked', false);
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er input required', (): void => {
      render(<RadioButton label={<Label labelTexts={[{ text: 'En fin label' }]} />} required />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toBeRequired();
    });
  });
});
