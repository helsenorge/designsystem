import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import Icon from '../Icons';
import Check from '../Icons/Check';
import { palette } from '../../theme/palette';
import { exitProcess } from 'yargs';
import { isExportDeclaration } from 'typescript';

describe('Gitt at button skal vises', (): void => {
  describe('Når button rendres', (): void => {
    test('Så vises button', (): void => {
      const { container } = render(<Button>Button</Button>);
      expect(container).toMatchSnapshot();
    });

    test('Så er textwrap på', (): void => {
      render(<Button>Button text</Button>);

      const testButtonText = screen.getByText('Button text');
      expect(testButtonText).toHaveStyle('white-space: normal;');
    });
  });

  describe('Når button rendres med ikoner', (): void => {
    test('Så vises ikonene', (): void => {
      const { container } = render(
        <Button>
          <Icon svgIcon={Check} />
          Button
          <Icon svgIcon={Check} />
        </Button>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når button rendres med ellipsis på', (): void => {
    test('Så brukes ellipsis på overflødig tekst', (): void => {
      render(<Button ellipsis={true}>Button text</Button>);

      const testButtonText = screen.getByText('Button text');
      expect(testButtonText).toHaveStyle('white-space: nowrap;');
      expect(testButtonText).toHaveStyle('text-overflow: ellipsis;');
    });
  });

  describe('Når button rendres med fluid og ikon(er)', (): void => {
    test('Så venstrestilles teksten', (): void => {
      render(
        <Button testId={'test01'} fluid={true}>
          Button text
          <Icon svgIcon={Check} />
        </Button>
      );

      const testLeftFluidContent = screen.getByTestId('test01').querySelector('div');
      expect(testLeftFluidContent).toHaveStyle('text-align: left;');
    });
  });

  describe('Når button rendres med disabled', (): void => {
    test('Så kan ikke knappen trykkes på', (): void => {
      const handleClick = jest.fn();

      render(
        <Button testId={'test01'} onClick={handleClick} disabled={true}>
          Button
        </Button>
      );

      const testButton = screen.getByTestId('test01');

      fireEvent.click(testButton);

      expect(handleClick).toHaveBeenCalledTimes(0);
      expect(testButton).toBeDisabled();
    });

    test('Så rendres den riktig', (): void => {
      render(
        <Button testId={'test01'} disabled={true}>
          Button
        </Button>
      );

      const testButton = screen.getByTestId('test01');

      expect(testButton).toHaveStyle(`background-color: ${palette.neutral200}`);
      expect(testButton).toHaveStyle(`color: ${palette.neutral600}`);
    });
  });

  describe('Når button rendres med intent', (): void => {
    test('Så er background-color riktig', (): void => {
      render(
        <div>
          <Button testId={'test01'} intent={'primary'}>
            Button
          </Button>
          <Button testId={'test02'} intent={'warning'}>
            Button
          </Button>
          <Button testId={'test03'} intent={'danger'}>
            Button
          </Button>
        </div>
      );

      const testButton1 = screen.getByTestId('test01');
      const testButton2 = screen.getByTestId('test02');
      const testButton3 = screen.getByTestId('test03');

      expect(testButton1).toHaveStyle(`background-color: ${palette.blueberry500}`);
      expect(testButton2).toHaveStyle(`background-color: ${palette.banana500}`);
      expect(testButton3).toHaveStyle(`background-color: ${palette.cherry500}`);
    });
  });

  describe('Når button rendres med inverted', (): void => {
    test('Så er farger riktig', (): void => {
      render(
        <Button testId={'test01'} inverted={true}>
          Button
        </Button>
      );

      const testButton = screen.getByTestId('test01');

      expect(testButton).toHaveStyle(`background-color: ${palette.white}`);
      expect(testButton).toHaveStyle(`color: ${palette.blueberry500}`);
    });
  });

  describe('Når button rendres med large', (): void => {
    test('Så er ikon riktig størrelse', (): void => {
      render(
        <Button large={true}>
          <Icon testId={'test01'} svgIcon={Check} />
          Button
        </Button>
      );

      const testButtonIcon = screen.getByTestId('test01');
      const height = getComputedStyle(testButtonIcon).getPropertyValue('min-height');
      const width = getComputedStyle(testButtonIcon).getPropertyValue('min-width');

      expect(height).toBe('64px');
      expect(width).toBe('64px');
    });
  });

  describe('Når button rendres med loading', (): void => {
    test('Så er loader elementet lagt til', (): void => {
      render(
        <Button loading={true}>
          <Icon svgIcon={Check} />
          Button
        </Button>
      );

      const testLoader = screen.getByTestId('test-id-loader');

      expect(testLoader).toBeTruthy();
    });
  });

  describe('Når button rendres med varianter', (): void => {
    test('Så rendres innholdet riktig', (): void => {
      render(
        <div>
          <Button testId={'test01'} variant={'fill'}>
            Button
          </Button>
          <Button testId={'test02'} variant={'outline'}>
            Button
          </Button>
          <Button testId={'test03'} variant={'borderless'}>
            Button
          </Button>
        </div>
      );

      const testFill = screen.getByTestId('test01');

      expect(testFill).toHaveStyle(`background-color: ${palette.blueberry500}`);

      const testOutline = screen.getByTestId('test02');

      expect(testOutline).toHaveStyle('background-color: transparent');
      expect(testOutline).toHaveStyle(`border-color: ${palette.blueberry500}`);

      const testBorderless = screen.getByTestId('test03');

      expect(testBorderless).toHaveStyle('background-color: transparent');
      expect(testBorderless).toHaveStyle('border: 0');
    });
  });
});
