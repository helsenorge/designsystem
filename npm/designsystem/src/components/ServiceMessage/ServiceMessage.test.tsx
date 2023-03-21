import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ServiceMessage from './ServiceMessage';

describe('Gitt at ServiceMessage skal vises', () => {
  describe('Når komponenten vises med default props', () => {
    test('Så rendres komponenten riktig', (): void => {
      const { container } = render(<ServiceMessage serviceMessageLabel={'Some text here for testing.'} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når komponenten vises med flere props', () => {
    test('Så rendres komponenten riktig', (): void => {
      const mockFunc = jest.fn();
      const { container } = render(
        <ServiceMessage
          serviceMessageLabel={'Some text here for testing.'}
          serviceMessageCloseBtnText={'Lukk'}
          serviceMessageExtraInfo={'Tester'}
          serviceMessageReadMoreText={'se mer'}
          serviceMessageReadMoreUrl='"/'
          onDismiss={mockFunc}
        />
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når komponenten skal kunne lukkes', () => {
    test('Så kalles onDismiss-handler når man klikker på lukkeknappen', async (): Promise<void> => {
      const mockFunc = jest.fn();

      render(
        <ServiceMessage
          serviceMessageLabel={'Some text here for testing.'}
          serviceMessageCloseBtnText={'Lukk'}
          serviceMessageExtraInfo={'Tester'}
          serviceMessageReadMoreText={'se mer'}
          serviceMessageReadMoreUrl='"/'
          onDismiss={mockFunc}
          expanderOpenFromStart
        />
      );

      const closeButton = screen.getByRole('button', { name: 'Lukk' });
      await userEvent.click(closeButton);
      expect(mockFunc).toHaveBeenCalledTimes(1);
    });
  });
  describe('Når komponenten skal kunne ta den til annen url', () => {
    test('Så forventes det at href er i komponenten', async (): Promise<void> => {
      const mockFunc = jest.fn();

      render(
        <ServiceMessage
          serviceMessageLabel={'Some text here for testing.'}
          serviceMessageCloseBtnText={'Lukk'}
          serviceMessageExtraInfo={'Tester'}
          serviceMessageReadMoreText={'se mer'}
          serviceMessageReadMoreUrl="/"
          onDismiss={mockFunc}
          expanderOpenFromStart
        />
      );

      const linkEl = screen.getByRole('link', { name: 'se mer' });

      expect(linkEl).toHaveAttribute('href', '/');
    });
  });
});
