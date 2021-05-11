import React from 'react';
import { screen, render } from '@testing-library/react';
import Avatar from './Avatar';

describe('Gitt at Avatar skal vises', (): void => {
  describe('Når selected er false', (): void => {
    it('Så vises teksten i Avatar-komponenten', (): void => {
      const { container } = render(<Avatar>Line Danser</Avatar>);

      const text = screen.getByText('Li');
      expect(text).toBeVisible();
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når selected er true', (): void => {
    it('Så vises ikke teksten', (): void => {
      const { container } = render(<Avatar selected>Line Danser</Avatar>);

      const text = screen.queryByText('Li');
      expect(text).not.toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
});
