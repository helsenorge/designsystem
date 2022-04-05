import React from 'react';
import { render, screen } from '@testing-library/react';
import Input, { InputTypes } from './Input';
import { FormMode, FormVariant } from '../../constants';
import Hospital from '../Icons/Hospital';

describe('Gitt at Input skal vises', (): void => {
  describe('Når Input rendres', (): void => {
    test('Så vises Input', (): void => {
      const { container } = render(<Input label={'Skriv noe'} />);

      expect(container).toMatchSnapshot();

      const label = screen.getByText('Skriv noe');
      expect(label).toBeVisible();

      const input = screen.getByRole('textbox');
      expect(input).toBeVisible();
      expect(input).toHaveClass('content-wrapper__input');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Input som disabled', (): void => {
      render(<Input label={'Skriv noe!'} disabled />);

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Når FormMode er onblueberry', (): void => {
    test('Så vises Input med onblueberry styling', (): void => {
      render(<Input label={'Skriv noe'} mode={FormMode.onblueberry} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--on-blueberry');
    });
  });
  describe('Når mode er ondark', (): void => {
    test('Så vises Input med ondark styling', (): void => {
      render(<Input label={'Skriv noe'} mode={FormMode.ondark} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--on-dark');
    });
  });
  describe('Når transparent er true', (): void => {
    test('Så vises Input med transparent styling', (): void => {
      render(<Input label={'Skriv noe'} transparent />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--transparent');
    });
  });
  describe('Når formvariant er bigform', (): void => {
    test('Så vises Input med bigform styling', (): void => {
      render(<Input label={'Skriv noe'} variant={FormVariant.bigform} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--bigform');
    });
  });

  describe('Når Input har en default value', (): void => {
    test('Så skal default value vises', (): void => {
      render(<Input label={'Skriv noe'} defaultValue={'default text'} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('default text');
    });
  });

  describe('Når Input har en placeholder value', (): void => {
    test('Så skal placeholder verdien vises', (): void => {
      render(<Input label={'Skriv noe'} placeholder={'placeholder  text'} />);
      const input = screen.getByPlaceholderText('placeholder text');
      expect(input).toBeVisible();
    });
  });

  describe('Når type settes', (): void => {
    test('Så skal input ha den typen satt', (): void => {
      render(<Input label={'Skriv noe'} type={InputTypes.number} />);
      const input = screen.getByRole('spinbutton');
      expect(input).toBeVisible();
    });
  });

  describe('Når icon settes', (): void => {
    test('Så rendres input med icon', (): void => {
      render(<Input label={'Skriv noe'} icon={Hospital} />);
      const svg = screen.getByRole('textbox').previousSibling;
      expect(svg).toHaveClass('hnds-style-icon');
    });
  });

  describe('Når iconRight er true', (): void => {
    test('Så rendres input med icon til høyre', (): void => {
      render(<Input label={'Skriv noe'} icon={Hospital} iconRight />);
      const svg = screen.getByRole('textbox').nextSibling;
      expect(svg).toHaveClass('hnds-style-icon');
    });
  });

  describe('Når Input har en error', (): void => {
    test('Så skal invalid styling brukes', (): void => {
      render(<Input label={'Skriv noe'} error />);
      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('content-wrapper content-wrapper--invalid');
    });
  });
});
