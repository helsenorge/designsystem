import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi as jest } from 'vitest';

import NotificationPanel from './NotificationPanel';

describe('Gitt at NotificationPanel skal vises', () => {
  describe('Når panelet vises med default props', () => {
    test('Så rendres komponenten riktig', (): void => {
      const { container } = render(<NotificationPanel>Some text here for testing.</NotificationPanel>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når panelet skal kunne lukkes', () => {
    test('Så kalles onClick-handler når man klikker på lukkeknappen', async (): Promise<void> => {
      const mockClose = jest.fn();

      render(
        <NotificationPanel onClick={mockClose} dismissable ariaLabelCloseBtn="Lukk denne beskjeden">
          Some text here for testing.
        </NotificationPanel>
      );

      const closeButton = screen.getByRole('button', { name: 'Lukk denne beskjeden' });
      await userEvent.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når panelet kan lukkes', () => {
    test('Så kalles onClick-handleren når man klikker på knappen', async (): Promise<void> => {
      const mockOnClick = jest.fn();
      const { container } = render(
        <NotificationPanel dismissable onClick={mockOnClick}>
          Some text here for testing.
        </NotificationPanel>
      );
      expect(container).toMatchSnapshot();

      const closeButton = screen.getByRole('button');
      await userEvent.click(closeButton);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<NotificationPanel testId="bare-tester">Some text here for testing.</NotificationPanel>);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });

  describe('Når bruker klikker på tab', (): void => {
    test('Så får lukkeknappen fokus først', async (): Promise<void> => {
      render(
        <NotificationPanel dismissable>
          Some text here for testing.<a href="/">Lenke</a>
        </NotificationPanel>
      );

      await userEvent.tab();

      const closeButton = screen.getByRole('button', { name: 'Lukk' });

      expect(closeButton).toHaveFocus();
    });
  });

  describe('Når bruker klikker på expand', (): void => {
    test('Så vises innholdet i expander', async (): Promise<void> => {
      render(
        <NotificationPanel expanderButtonClosedText="Close" expanderButtonText="Open" expanderChildren="Expanded Content">
          Some text here for testing.<a href="/">Lenke</a>
        </NotificationPanel>
      );

      const expandButton = screen.getByTestId('expand');
      await userEvent.click(expandButton);
      expect(await screen.findByText('Expanded Content')).toBeInTheDocument();
    });
  });

  describe('Når bruker ser compact-variant', (): void => {
    test('Så vises innhold', async (): Promise<void> => {
      const { container } = render(
        <>
          <NotificationPanel compactVariant="basic">
            Some text here for testing.<a href="/">Lenke</a>
          </NotificationPanel>
          <NotificationPanel compactVariant="outline">
            Some text here for testing.<a href="/">Lenke</a>
          </NotificationPanel>
        </>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når role er region', (): void => {
    describe('Når panelet har label og tekstlig innhold', (): void => {
      test('Så er panelet tilgjengelig via label', (): void => {
        render(
          <NotificationPanel role="region" label="Overskrift">
            Some text here for testing
          </NotificationPanel>
        );

        const panel = screen.getByRole('region', { name: 'Overskrift' });
        expect(panel).toBeInTheDocument();
      });
    });

    describe('Når panelet har bare rent tekstlig innhold', (): void => {
      test('Så er panelet tilgjengelig via teksten i panelet', (): void => {
        render(<NotificationPanel role="region">Some text here for testing</NotificationPanel>);

        const panel = screen.getByRole('region', { name: 'Some text here for testing' });
        expect(panel).toBeInTheDocument();
      });
    });

    describe('Når panelet JSX som innhold, og ikke ariaLabel eller label', (): void => {
      test('Så er panelet tilgjengelig via teksten i panelet', (): void => {
        render(
          <NotificationPanel role="region">
            <p>Some text here for testing</p>
          </NotificationPanel>
        );

        const panel = screen.getByRole('region', { name: 'Some text here for testing' });
        expect(panel).toBeInTheDocument();
      });
    });

    describe('Når panelet har label og labelId', (): void => {
      test('Så er panelet tilgjengelig via label', (): void => {
        render(
          <NotificationPanel role="region" label="Overskrift" labelId={'sidetittel'}>
            Some text here for testing
          </NotificationPanel>
        );

        const panel = screen.getByRole('region', { name: 'Overskrift' });
        expect(panel).toBeInTheDocument();
      });
      test('Så bruker label labelId som id', (): void => {
        render(
          <NotificationPanel role="region" label="Overskrift" labelId={'sidetittel'}>
            Some text here for testing
          </NotificationPanel>
        );

        const title = screen.getByRole('heading', { name: 'Overskrift' });
        expect(title).toHaveAttribute('id', 'sidetittel');
      });
    });
  });

  describe('Når role er alert', (): void => {
    test('Så har komponenten role=alert', (): void => {
      render(<NotificationPanel role="alert">Warning!</NotificationPanel>);

      const component = screen.getByRole('alert', { name: 'Warning!' });
      expect(component).toBeVisible();
    });
  });

  describe('Når role ikke har satt', (): void => {
    test('Så har komponenten ikke role=region', (): void => {
      render(<NotificationPanel>Important!</NotificationPanel>);

      const component = screen.queryByRole('region');
      expect(component).not.toBeInTheDocument();
    });
  });

  describe('Når variant er alert', (): void => {
    test('Så har komponenten role=alert', (): void => {
      render(<NotificationPanel variant="alert">Danger!</NotificationPanel>);

      const component = screen.getByRole('alert', { name: 'Danger!' });
      expect(component).toBeVisible();
    });
  });

  describe('Når variant er alert og role er region', (): void => {
    test('Så har komponenten role=region', (): void => {
      render(
        <NotificationPanel variant="alert" role="region">
          Danger!
        </NotificationPanel>
      );

      const component = screen.getByRole('region', { name: 'Danger!' });
      expect(component).toBeVisible();
    });
  });
});
