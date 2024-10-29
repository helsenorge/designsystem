import { render, screen } from '@testing-library/react';

import Logo from './Logo';

test('displays original logo', (): void => {
  const { container } = render(<Logo />);
  expect(container).toMatchSnapshot();
});

test('displays byline logo', (): void => {
  const { container } = render(<Logo byline />);
  expect(container).toMatchSnapshot();
});

describe('Gitt at Logo skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Logo testId="bare-tester" />);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
