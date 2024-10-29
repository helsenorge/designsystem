import { render, screen } from '@testing-library/react';

import Label, { LabelText } from './Label';
import { Sublabel } from './SubLabel';
import { FormOnColor } from '../../constants';
import Input from '../Input';
import StatusDot from '../StatusDot';

describe('Gitt at Label skal vises', (): void => {
  describe('Når Label rendres', (): void => {
    test('Så vises Label og Sublabel', (): void => {
      const sublabelId = 'sublabel-testid';
      const sublabelTexts: LabelText[] = [
        { text: 'normal sublabel with a pretty long text', type: 'normal' },
        { text: 'Semibold sublabel', type: 'semibold' },
      ];

      render(
        <>
          <Label
            labelTexts={[
              { text: 'normal label', type: 'normal' },
              { text: 'normal sublabel', type: 'normal' },
            ]}
            sublabel={<Sublabel id={sublabelId} sublabelTexts={sublabelTexts} />}
            statusDot={<StatusDot text={'Statusdot text'} variant={'alert'} />}
          />
        </>
      );

      const label = screen.getByText('normal label');
      const sublabel = screen.getByText('normal sublabel');
      const statusdot = screen.getByText('Statusdot text');
      expect(label).toBeVisible();
      expect(sublabel).toBeVisible();
      expect(statusdot).toBeVisible();
    });
  });
  describe('Når Label og sublabel rendres med normal og bold tekst', (): void => {
    test('Så vises Label og Sublabel med riktige klasser', (): void => {
      const sublabelId = 'sublabel-testid';
      const sublabelTexts: LabelText[] = [
        { text: 'normal sublabel', type: 'normal' },
        { text: 'Semibold sublabel', type: 'semibold' },
      ];

      render(
        <>
          <Label
            labelTexts={[
              { text: 'Semibold label', type: 'semibold' },
              { text: 'normal label', type: 'normal' },
              { text: 'semibold returns', type: 'semibold' },
              { text: 'another normal label', type: 'normal' },
            ]}
            sublabel={<Sublabel id={sublabelId} sublabelTexts={sublabelTexts} />}
            statusDot={<StatusDot text={'Statusdot text'} variant={'alert'} />}
          />
        </>
      );

      const labelBold = screen.getByText('Semibold label');
      const labelNormal = screen.getByText('normal label');
      const sublabelBold = screen.getByText('Semibold sublabel');
      const sublabelNormal = screen.getByText('normal sublabel');
      expect(labelBold).toHaveClass('label label--semibold');
      expect(labelNormal).toHaveClass('label');
      expect(sublabelBold).toHaveClass('label label--sublabel label--semibold');
      expect(sublabelNormal).toHaveClass('label label--sublabel');
    });
  });
  describe('Når Label og sublabel rendres med onColor ondark', (): void => {
    test('Så vises Label og Sublabel med ondark klasser', (): void => {
      const sublabelId = 'sublabel-testid';
      const sublabelTexts: LabelText[] = [{ text: 'normal sublabel', type: 'normal' }];

      render(
        <>
          <Label
            labelTexts={[{ text: 'normal label', type: 'normal' }]}
            sublabel={<Sublabel id={sublabelId} sublabelTexts={sublabelTexts} />}
            statusDot={<StatusDot text={'Statusdot text'} variant={'alert'} />}
            onColor={FormOnColor.ondark}
          />
        </>
      );

      const labelNormal = screen.getByText('normal label');
      const sublabelNormal = screen.getByText('normal sublabel');
      expect(labelNormal).toHaveClass('label label--on-dark');
      expect(sublabelNormal).toHaveClass('label label--sublabel label--on-dark');
    });
  });
  describe('Når Label og sublabel kobles til et input felt', (): void => {
    test('Så får vi riktige aria-attributter', (): void => {
      const inputId = 'input-testid';
      const sublabelId = 'sublabel-testid';
      const sublabelTexts: LabelText[] = [{ text: 'normal sublabel', type: 'normal' }];

      render(
        <>
          <Label
            labelTexts={[{ text: 'normal label', type: 'normal' }]}
            sublabel={<Sublabel id={sublabelId} sublabelTexts={sublabelTexts} />}
            statusDot={<StatusDot text={'Statusdot text'} variant={'alert'} />}
            htmlFor={inputId}
            onColor={FormOnColor.ondark}
            testId={'test-label'}
          />
          <Input aria-describedby={sublabelId} inputId={inputId} />
        </>
      );

      const label = screen.getByTestId('test-label');
      const input = screen.getByRole('textbox');
      expect(label).toHaveAttribute('for', 'input-testid');
      expect(input).toHaveAttribute('aria-describedby', sublabelId);
    });
  });

  describe('Når Label ikke får satt htmlMarkup prop', (): void => {
    test('Så blir den rendret med default label tag', (): void => {
      render(<Label labelTexts={[{ text: 'normal label', type: 'normal' }]} testId="normalLabel" />);

      const spanLabel = screen.getByTestId('normalLabel');
      expect(spanLabel).toBeVisible();
      expect(spanLabel.tagName).toBe('LABEL');
    });
  });
  describe('Når Label får satt htmlMarkup prop', (): void => {
    test('Så blir den rendret med riktig span tag', (): void => {
      render(<Label labelTexts={[{ text: 'span label', type: 'normal' }]} htmlMarkup={'span'} testId="spanLabel" />);

      const spanLabel = screen.getByTestId('spanLabel');
      expect(spanLabel).toBeVisible();
      expect(spanLabel.tagName).toBe('SPAN');
    });
    test('Så blir den rendret med riktig h1 tag', (): void => {
      render(<Label labelTexts={[{ text: 'h1 label', type: 'normal' }]} htmlMarkup={'h1'} testId="titleLabel" />);

      const h1Label = screen.getByTestId('titleLabel');
      expect(h1Label).toBeVisible();
      expect(h1Label.tagName).toBe('H1');
    });
    test('Så blir den rendret med riktig p tag', (): void => {
      render(<Label labelTexts={[{ text: 'h1 label', type: 'normal' }]} htmlMarkup={'p'} testId="pLabel" />);

      const pLabel = screen.getByTestId('pLabel');
      expect(pLabel).toBeVisible();
      expect(pLabel.tagName).toBe('P');
    });
  });
});
