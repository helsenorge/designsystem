import React from 'react';

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ServiceMessage from './ServiceMessage';

describe('Gitt at ServiceMessage skal vises', () => {
  describe('Når komponenten vises med default props', () => {
    test('Så rendres komponenten riktig', (): void => {
      const { container } = render(<ServiceMessage label={'Some text here for testing.'} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når komponenten skal kunne lukkes', () => {
    test('Så kalles onClick-handler når man klikker på lukkeknappen', async (): Promise<void> => {
      const mockClose = jest.fn();

      render(
        <ServiceMessage label={'Some text here for testing.'} onDismiss={mockClose} dismissable closeBtnText="Lukk denne beskjeden" />
      );

      const closeButton = screen.getByRole('button', { name: 'Lukk denne beskjeden' });

      await userEvent.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<ServiceMessage testId="bare-tester" label={'Some text here for testing.'} />);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });

  describe('Når komponenten ikke har expander og bruker klikker på tab', (): void => {
    test('Så får lukkeknappen fokus først', async (): Promise<void> => {
      const mockClose = jest.fn();
      render(<ServiceMessage label={'Some text here for testing.'} dismissable closeBtnText="lukk" onDismiss={mockClose} />);

      await userEvent.tab();

      const closeButton = screen.getByRole('button', { name: 'lukk' });

      expect(closeButton).toHaveFocus();
    });
  });
  describe('Når komponenten har expander og bruker klikker på tab', (): void => {
    test('Så får øverste rad/knapp fokus først', async (): Promise<void> => {
      const mockClose = jest.fn();
      render(<ServiceMessage label={'Some text here for testing.'} dismissable closeBtnText="lukk" info="hei" onDismiss={mockClose} />);

      await userEvent.tab();

      const button = screen.getByRole('button', { name: 'Some text here for testing.' });

      expect(button).toHaveFocus();
    });
  });

  describe('Når bruker klikker på expand', (): void => {
    test('Så vises innholdet i expander', async (): Promise<void> => {
      render(<ServiceMessage label={'Some text here for testing.'} info={'hei'} />);

      const expandButton = screen.getByRole('button', { name: 'Some text here for testing.' });
      await userEvent.click(expandButton);

      const info = screen.getByText('hei');
      expect(info).toBeVisible();
    });
  });
  describe('Når expander skal være åpen fra start', (): void => {
    test('Så vises innholdet i expander fra start', async (): Promise<void> => {
      render(<ServiceMessage expanderOpenFromStart label={'Some text here for testing.'} info={'hei'} />);

      const info = screen.getByText('hei');
      expect(info).toBeVisible();
    });
  });
  describe('Når komponenten har expander', () => {
    test('Så kalles onClick-handler når man klikker på lukkeknappen etter å ha ekspandert', async (): Promise<void> => {
      const mockClose = jest.fn();
      render(
        <ServiceMessage
          label={'Some text here for testing.'}
          info={'hei'}
          closeBtnText="Lukk denne beskjeden"
          onDismiss={mockClose}
          dismissable
        />
      );

      const expandButton = screen.getByRole('button', { name: 'Some text here for testing.' });
      await userEvent.click(expandButton);
      const closeButton = screen.getByRole('button', { name: 'Lukk denne beskjeden' });
      await userEvent.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
