import { screen, render } from '@testing-library/react';

import PanelListOld from './PanelListOld';
import PanelOld from '../PanelOld';

describe('Gitt at PanelListOld skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<PanelListOld testId="bare-tester" />);

      const panelList = screen.getByTestId('bare-tester');
      expect(panelList).toBeVisible();
      expect(panelList).toHaveAttribute('data-analyticsid', 'panel-list');
    });
    test('Så har den riktig analyticsid', (): void => {
      render(<PanelListOld testId="bare-tester" />);

      const panelList = screen.getByTestId('bare-tester');
      expect(panelList).toHaveAttribute('data-analyticsid', 'panel-list');
    });
  });
  describe('Når listen har Panel som children', (): void => {
    test('Så vises panelene', async (): Promise<void> => {
      render(
        <PanelListOld>
          <PanelOld title="Overskrift 1">
            <p>{'Litt tekst'}</p>
          </PanelOld>
          <PanelOld title="Overskrift 2">
            <p>{'Litt tekst'}</p>
          </PanelOld>
        </PanelListOld>
      );

      const panel1 = await screen.findByRole('heading', { name: 'Overskrift 1' });
      expect(panel1).toBeVisible();
      const panel2 = screen.getByRole('heading', { name: 'Overskrift 2' });
      expect(panel2).toBeVisible();
    });
  });
  describe('Når PanelListOld har Panel som child', (): void => {
    test('Så har panelet klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelListOld>
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelListOld>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).toHaveClass('panel-list__panel');
    });
  });
  describe('Når variant er fill', (): void => {
    test('Så har panelet klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelListOld variant="fill">
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelListOld>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).toHaveClass('panel-list__panel');
    });
  });
  describe('Når variant er white', (): void => {
    test('Så har panelet klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelListOld variant="white">
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelListOld>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).toHaveClass('panel-list__panel');
    });
  });
  describe('Når variant er stroke', (): void => {
    test('Så har panelet klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelListOld variant="stroke">
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelListOld>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).toHaveClass('panel-list__panel');
    });
  });
  describe('Når variant er line', (): void => {
    test('Så har panelet ikke klasse for margin mellom panelene', async (): Promise<void> => {
      render(
        <PanelListOld variant="line">
          <PanelOld title="Overskrift 1" testId="panel" />
        </PanelListOld>
      );

      const panel = screen.getByTestId('panel');
      expect(panel).not.toHaveClass('panel-list__panel');
    });
  });
});
