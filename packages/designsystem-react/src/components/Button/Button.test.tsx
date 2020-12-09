import React from 'react';
import {render, screen} from '@testing-library/react';
import Button from './Button';
import Icon from '../Icons';
import Check from '../Icons/Check';

describe('Gitt at button skal vises', (): void => {
  describe('Når button rendres', (): void => {
    test('Så vises button', (): void => {
      const {container} = render(<Button>Button</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når button rendres med ikoner', (): void => {
    test('Så vises ikonene', (): void => {
      const {container} = render(
        <Button>
          <Icon svgIcon={Check} />
          Button
          <Icon svgIcon={Check} />
        </Button>,
      );
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når button rendres', (): void => {
    test('Så er textwrap på', (): void => {
      render(<Button testContentId={'test01'}>Button text</Button>);

      const testButtonText = screen.getByTestId('test01');
      expect(testButtonText).toHaveStyle('white-space: normal;');
    });
  });
  describe('Når button rendres med textWrap av', (): void => {
    test('Så brukes ellipsis på overflødig tekst', (): void => {
      const ellipsisWidth = 15;

      render(
        <Button testContentId={'test01'} textWrap={false} ellipsisWidth={ellipsisWidth}>
          Button text
        </Button>,
      );

      const testButtonText = screen.getByTestId('test01');
      expect(testButtonText).toHaveStyle(`max-width: ${ellipsisWidth}rem;`);
      expect(testButtonText).toHaveStyle('white-space: nowrap;');
      expect(testButtonText).toHaveStyle('text-overflow: ellipsis;');
    });
  });
});
