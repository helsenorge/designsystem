import { screen, render } from '@testing-library/react';

import Avatar from './Avatar';

describe('Gitt at Avatar skal vises', (): void => {
  describe('Når selected er false', (): void => {
    it('Så vises teksten i Avatar-komponenten', (): void => {
      render(<Avatar>{'Line Danser'}</Avatar>);

      const text = screen.getByText('Li');
      expect(text).toBeVisible();
    });
  });
  describe('Når selected er true', (): void => {
    it('Så vises ikke teksten', (): void => {
      render(<Avatar selected>{'Line Danser'}</Avatar>);

      const text = screen.queryByText('Li');
      expect(text).not.toBeInTheDocument();
    });
  });
  describe('Når variant er black', (): void => {
    it('Så skal komponenten være svart', (): void => {
      render(<Avatar color="black">{'Barbra Streisand'}</Avatar>);

      const text = screen.queryByText('Ba');
      expect(text).toBeVisible();
    });
  });
  describe('Når variant er black og selected', (): void => {
    it('Så skal bakgrunnen være transparent og fargen på ikon er svart', (): void => {
      render(
        <Avatar selected color="black">
          {'Barbra Streisand'}
        </Avatar>
      );

      const text = screen.queryByText('Ba');
      expect(text).not.toBeInTheDocument();
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
