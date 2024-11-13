import { screen, render } from '@testing-library/react';

import Avatar from './Avatar';

describe('Gitt at Avatar skal vises', (): void => {
  describe('Når selected er false', (): void => {
    it('Så vises teksten i Avatar-komponenten', (): void => {
      const { container } = render(<Avatar>{'Line Danser'}</Avatar>);

      const text = screen.getByText('Li');
      expect(text).toBeVisible();
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når selected er true', (): void => {
    it('Så vises ikke teksten', (): void => {
      const { container } = render(<Avatar selected>{'Line Danser'}</Avatar>);

      const text = screen.queryByText('Li');
      expect(text).not.toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når variant er black', (): void => {
    it('Så skal komponenten være svart', (): void => {
      const { container } = render(<Avatar color="black">{'Barbra Streisand'}</Avatar>);

      const text = screen.queryByText('Ba');
      expect(text).toBeVisible();
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når variant er black og selected', (): void => {
    it('Så skal bakgrunnen være transparent og fargen på ikon er svart', (): void => {
      const { container } = render(
        <Avatar selected color="black">
          {'Barbra Streisand'}
        </Avatar>
      );

      const text = screen.queryByText('Ba');
      expect(text).not.toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Avatar testId="bare-tester">{'Barbara Streisand'}</Avatar>);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
