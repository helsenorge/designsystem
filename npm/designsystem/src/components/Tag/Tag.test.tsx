import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tag from './Tag';

describe('Gitt at Tag skal vises vanlig', (): void => {
  describe('Når Tagen vises', (): void => {
    test('Så er teksten synlig', (): void => {
      render(<Tag>Tekst</Tag>);

      const tag = screen.getByText('Tekst');

      expect(tag).toBeVisible();
    });
    test('Så ser den ut slik den skal', (): void => {
      const { container } = render(<Tag>Tekst</Tag>);

      expect(container).toMatchSnapshot();
    });
  });
});

describe('Gitt at Tag skal vises som remove-knapp', (): void => {
  describe('Når man klikker på knappen', (): void => {
    test('Så kalles click-funksjonen', (): void => {
      const mockClickHandler = jest.fn();

      render(
        <Tag action="remove" onClick={mockClickHandler}>
          Knapp
        </Tag>
      );

      const tag = screen.getByRole('button', { name: 'Knapp' });

      expect(tag).toBeVisible();

      userEvent.click(tag);

      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Gitt at Tag skal vises som undo-knapp', (): void => {
  describe('Når man klikker på knappen', (): void => {
    test('Så kalles click-funksjonen', (): void => {
      const mockClickHandler = jest.fn();

      render(
        <Tag action="undo" onClick={mockClickHandler}>
          Knapp
        </Tag>
      );

      const tag = screen.getByRole('button', { name: 'Knapp' });

      expect(tag).toBeVisible();

      userEvent.click(tag);

      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
  });
  describe('Når onClick ikke er definert', (): void => {
    test('Så vises ikke tagen som knapp likevel', (): void => {
      render(<Tag action="undo">Knapp</Tag>);

      const tag = screen.queryByRole('button');

      expect(tag).not.toBeInTheDocument();
    });
  });
  describe('Når action ikke er definert', (): void => {
    test('Så vises ikke tagen som knapp likevel', (): void => {
      render(<Tag onClick={jest.fn()}>Knapp</Tag>);

      const tag = screen.queryByRole('button');

      expect(tag).not.toBeInTheDocument();
    });
  });
});
