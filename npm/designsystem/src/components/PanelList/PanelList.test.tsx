import { screen, render } from '@testing-library/react';

import PanelList from './PanelList';
import PanelOld from '../PanelOld';

describe('Gitt at PanelList skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<PanelList testId="bare-tester" />);

      const panelList = screen.getByTestId('bare-tester');
      expect(panelList).toBeVisible();
      expect(panelList).toHaveAttribute('data-analyticsid', 'panel-list');
    });
    test('Så har den riktig analyticsid', (): void => {
      render(<PanelList testId="bare-tester" />);

      const panelList = screen.getByTestId('bare-tester');
      expect(panelList).toHaveAttribute('data-analyticsid', 'panel-list');
    });
  });
  describe('Når listen har Panel som children', (): void => {
    test('Så vises panelene', async (): Promise<void> => {
      render(
        <PanelList>
          <PanelOld title="Overskrift 1">
            <p>{'Litt tekst'}</p>
          </PanelOld>
          <PanelOld title="Overskrift 2">
            <p>{'Litt tekst'}</p>
          </PanelOld>
        </PanelList>
      );

      const panel1 = await screen.findByRole('heading', { name: 'Overskrift 1' });
      expect(panel1).toBeVisible();
      const panel2 = screen.getByRole('heading', { name: 'Overskrift 2' });
      expect(panel2).toBeVisible();
    });
  });
  describe('Når PanelList har Panel som child', (): void => {
    test('Så har panelet klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelList>
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelList>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).toHaveClass('panel-list__panel');
    });
  });
  describe('Når variant er fill', (): void => {
    test('Så har panelet klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelList variant="fill">
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelList>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).toHaveClass('panel-list__panel');
    });
  });
  describe('Når variant er white', (): void => {
    test('Så har panelet klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelList variant="white">
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelList>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).toHaveClass('panel-list__panel');
    });
  });
  describe('Når variant er stroke', (): void => {
    test('Så har panelet klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelList variant="stroke">
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelList>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).toHaveClass('panel-list__panel');
    });
  });
  describe('Når variant er line', (): void => {
    test('Så har panelet ikke klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelList variant="line">
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelList>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).not.toHaveClass('panel-list__panel');
    });
  });
});
