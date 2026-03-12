import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { PanelStatus, PanelVariant } from './constants';
import Panel from './Panel';

describe('Gitt at Panel skal vises', () => {
  describe('Når Panel vises', () => {
    test('Så vises Panel', () => {
      render(<Panel testId="panel" />);
      const panelElement = screen.getByTestId('panel');
      expect(panelElement).toBeInTheDocument();
    });

    test('Så vises tittelen når en tittel er gitt', () => {
      render(
        <Panel>
          <Panel.Title title="Test Tittel" />
        </Panel>
      );

      expect(screen.getByText('Test Tittel')).toBeInTheDocument();
    });

    test('Så vises innholdet når det er gitt', () => {
      render(
        <Panel>
          <Panel.A>{'Innhold A'}</Panel.A>
          <Panel.B>{'Innhold B'}</Panel.B>
        </Panel>
      );
      expect(screen.getByText('Innhold A')).toBeInTheDocument();
      expect(screen.getByText('Innhold B')).toBeInTheDocument();
    });

    test('Så rendres Panel med riktig farge', () => {
      render(<Panel variant={PanelVariant.fill} color="neutral" testId="panel" />);
      const panelElement = screen.getByTestId('panel');
      expect(panelElement).toHaveClass('panel--neutral');
    });
  });

  describe('Når brukeren klikker på ekspanderingsknappen', () => {
    test('Så vises utvidet innhold', () => {
      render(
        <Panel>
          <Panel.ExpandedContent>{'Utvidet innhold'}</Panel.ExpandedContent>
        </Panel>
      );

      const expandButton = screen.getByRole('button', { name: /Se detaljer/i });
      fireEvent.click(expandButton);

      expect(screen.getByText('Utvidet innhold')).toBeInTheDocument();
    });

    test('Så skjules utvidet innhold når knappen klikkes igjen', () => {
      render(
        <Panel>
          <Panel.ExpandedContent>{'Utvidet innhold'}</Panel.ExpandedContent>
        </Panel>
      );

      const expandButton = screen.getByRole('button', { name: /Se detaljer/i });
      fireEvent.click(expandButton); // Expand
      fireEvent.click(expandButton); // Collapse

      expect(screen.queryByText('Utvidet innhold')).not.toBeInTheDocument();
    });
  });

  describe('Når Panel har en CTA', () => {
    test('Så kalles handlingen når knappen klikkes', () => {
      const onClickMock = vi.fn();
      render(<Panel buttonBottomText="Klikk meg" buttonBottomOnClick={onClickMock} />);

      const button = screen.getByRole('button', { name: /Klikk meg/i });
      fireEvent.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når Panel har status', () => {
    test('Så vises riktig statusklasse for new', () => {
      render(<Panel status={PanelStatus.new} testId="panel" />);
      const panelElement = screen.getByTestId('panel');
      expect(panelElement).toHaveClass('panel--new');
    });

    test('Så vises riktig statusklasse for error', () => {
      render(<Panel status={PanelStatus.error} testId="panel" />);
      const panelElement = screen.getByTestId('panel');
      expect(panelElement).toHaveClass('panel--error');
    });

    test('Så vises riktig statusklasse for draft', () => {
      render(<Panel status={PanelStatus.draft} testId="panel" />);
      const panelElement = screen.getByTestId('panel');
      expect(panelElement).toHaveClass('panel--draft');
    });

    test('Så vises ingen statusklasse når status er "none"', () => {
      render(<Panel status={PanelStatus.none} testId="panel" />);
      const panelElement = screen.getByTestId('panel');
      expect(panelElement).not.toHaveClass('panel--new');
      expect(panelElement).not.toHaveClass('panel--error');
    });
  });

  describe('Når Panel har ikon i tittelen', () => {
    test('Så vises ikonet', () => {
      render(
        <Panel>
          <Panel.Title title="Test Tittel" icon={<span data-testid="icon" />} />
        </Panel>
      );
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
  });

  describe('Når Panel ikke har utvidbart innhold', () => {
    test('Så vises ikke ekspanderingsknappen', () => {
      render(<Panel testId="panel" />);
      const expandButton = screen.queryByRole('button', { name: /Se detaljer/i });
      expect(expandButton).not.toBeInTheDocument();
    });
  });

  describe('Når Panel får custom ref', () => {
    test('Så kan man bruke denne', () => {
      const panelRef = React.createRef<HTMLDivElement>();
      render(<Panel testId="panel-test" ref={panelRef} />);

      expect(panelRef.current).toBeInstanceOf(HTMLDivElement);
      expect(panelRef.current).toHaveAttribute('data-testid', 'panel-test');
    });
  });
});
