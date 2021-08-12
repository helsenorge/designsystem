import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotificationPanel from './NotificationPanel';

describe('Gitt at NotificationPanel skal vises', () => {
  describe('Når panelet vises med default props', () => {
    test('Så rendres komponenten riktig', (): void => {
      const { container } = render(<NotificationPanel>Some text here for testing.</NotificationPanel>);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når panelet kan lukkes', () => {
    test('Så kalles onClick-handleren når man klikker på knappen', (): void => {
      const mockOnClick = jest.fn();
      const { container } = render(
        <NotificationPanel dismissable onClick={mockOnClick}>
          Some text here for testing.
        </NotificationPanel>
      );
      expect(container).toMatchSnapshot();

      const closeButton = screen.getByRole('button');
      userEvent.click(closeButton);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
