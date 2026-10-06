import { render, screen, fireEvent } from '@testing-library/react';

import Radio from './Radio';
import { FormOnColor, FormSize } from '../../constants';
import FormGroup from '../FormGroup';
import Label from '../Label';

describe('Gitt at Radio skal vises', (): void => {
  describe('Når Radio rendres', (): void => {
    test('Så vises Radio', (): void => {
      render(<Radio inputId={'test01'} label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />} />);

      const label = screen.getByTestId('radio-label');
      expect(label).toBeVisible();
      expect(label).toHaveClass('radio-label');

      const input = screen.getByRole('radio');
      expect(input).toBeVisible();
      expect(input).toHaveClass('radio');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Radio som disabled', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />} disabled />);

      const input = screen.getByRole('radio');
      const label = screen.getByTestId('radio-label');
      expect(input).toBeDisabled();
      expect(label).toHaveClass('radio-label radio-label--disabled');
    });
  });

  describe('Når onColor er onBlueberry', (): void => {
    test('Så vises Radio med onBlueberry styling', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />} onColor={FormOnColor.onblueberry} />);

      const label = screen.getByTestId('radio-label');
      expect(label).toHaveClass('radio-label');
    });
  });
  describe('Når onColor er onDark', (): void => {
    test('Så vises Radio med onDark styling', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />} onColor={FormOnColor.ondark} />);

      const label = screen.getByTestId('radio-label');
      expect(label).toHaveClass('radio-label radio-label--on-dark');
    });
  });

  describe('Når size er large', (): void => {
    test('Så vises Radio med large styling', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />} size={FormSize.large} />);

      const label = screen.getByTestId('radio-label');
      expect(label).toHaveClass('radio-label radio-label__large');
    });
  });

  describe('Når size er large', (): void => {
    test('Så vises Radio checked state riktig styling', (): void => {
      render(
        <FormGroup legend={'onwhite'} name="radio1" onColor={'onwhite'} size={'large'}>
          <Radio label={<Label testId="radio1-label" labelTexts={[{ text: 'Radio1' }]} />} />
          <Radio label={<Label testId="radio2-label" labelTexts={[{ text: 'Radio2' }]} />} />
        </FormGroup>
      );

      const radios = screen.getAllByRole('radio');
      const input1 = radios[0];
      const input2 = radios[1];
      const label = screen.getByTestId('radio1-label');
      const label2 = screen.getByTestId('radio2-label');

      fireEvent.click(screen.getByText('Radio1'));

      // Selected-styling drives off native :has(input:checked) in CSS, so we assert DOM state directly
      expect(input1).toHaveProperty('checked', true);
      expect(input2).toHaveProperty('checked', false);
      expect(label).toHaveClass('radio-label__large');
      expect(label2).toHaveClass('radio-label__large');

      fireEvent.click(screen.getByText('Radio2'));

      expect(input1).toHaveProperty('checked', false);
      expect(input2).toHaveProperty('checked', true);
    });
  });

  describe('Når startChecked er true', (): void => {
    test('Så vises Radio som checked', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'Radio1' }]} />} defaultChecked />);

      const input = screen.getByRole('radio');
      expect(input).toHaveProperty('checked', true);
    });
  });

  describe('Når Radio trykkes på', (): void => {
    test('Så vises Radio som checked', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'Radio1' }]} />} />);

      fireEvent.click(screen.getByText('Radio1'));

      const input = screen.getByRole('radio');
      expect(input).toHaveProperty('checked', true);
    });
  });

  describe('Når Radio får satt error', (): void => {
    test('Så vises Radio med indre error styling, uten ytre error styling', (): void => {
      render(<Radio testId={'test01'} label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />} error />);

      // Indre styling
      const label = screen.getByTestId('radio-label');

      expect(label).toHaveClass('radio-label radio-label--invalid');

      // Ytre styling
      const wrapper = screen.getByTestId('test01');
      expect(wrapper).toHaveClass('radio-wrapper');
    });
  });

  describe('Når Radio får satt errorText', (): void => {
    test('Så vises Radio med errormelding i tilleg til indre og ytre error styling', (): void => {
      render(
        <Radio
          testId={'test01'}
          inputId="radio01"
          label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />}
          errorText={'error error!'}
        />
      );

      const radioButton = screen.getByLabelText('Radio1');

      expect(radioButton).toHaveAccessibleDescription('error error!');

      // Indre styling
      const label = screen.getByTestId('radio-label');

      expect(label).toHaveClass('radio-label radio-label--invalid');
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har input riktig name', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'En fin label' }]} />} name="custom-name" />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når value-prop er satt', (): void => {
    test('Så har input riktig value', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'En fin label' }]} />} value="custom-value" />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveAttribute('value', 'custom-value');
    });
  });

  describe('Når disabled er satt', (): void => {
    test('Så er input disabled', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'En fin label' }]} />} disabled />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toBeDisabled();
    });
  });

  describe('Når defaultChecked er satt', (): void => {
    test('Så er input checked', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'En fin label' }]} />} defaultChecked />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveAttribute('checked', '');
    });
  });

  describe('Når radio er controlled', (): void => {
    test('Så kan den settes checked', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'En fin label' }]} />} checked={true} />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveProperty('checked', true);
    });

    test('Så kan den settes unchecked', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'En fin label' }]} />} checked={false} />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveProperty('checked', false);
    });

    test('Så er den default unchecked', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'En fin label' }]} />} />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toHaveProperty('checked', false);
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er input required', (): void => {
      render(<Radio label={<Label labelTexts={[{ text: 'En fin label' }]} />} required />);

      const radioButton = screen.getByLabelText('En fin label');
      expect(radioButton).toBeRequired();
    });
  });
});
