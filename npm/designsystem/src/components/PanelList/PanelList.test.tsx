import { screen, render } from '@testing-library/react';

import PanelList from './PanelList';
import { PanelVariant } from '../Panel/constants';
import Panel from '../Panel/Panel';

describe('Gitt at PanelList skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<PanelList testId="bare-tester" />);

      const panelList = screen.getByTestId('bare-tester');
      expect(panelList).toBeVisible();
      expect(panelList).toHaveAttribute('data-analyticsid', 'panel-list');
    });
  });

  describe('Når PanelList inneholder Panel komponenter', (): void => {
    test('Så skal styling også gjelde for Panel inne i custom komponenter', (): void => {
      const CustomPanelWrapper: React.FC = () => (
        <Panel testId="panel">
          <Panel.Title title="Wrapped panel" />
          <Panel.A>{'Content in wrapped panel'}</Panel.A>
        </Panel>
      );

      render(
        <PanelList variant={PanelVariant.outline} testId="panel-list-with-wrapped">
          <Panel testId="panel">
            <Panel.Title title="Direct panel" />
            <Panel.A>{'Direct content'}</Panel.A>
          </Panel>
          <CustomPanelWrapper />
        </PanelList>
      );

      const panelList = screen.getByTestId('panel-list-with-wrapped');
      expect(panelList).toBeInTheDocument();
      const panels = screen.getAllByTestId('panel');
      expect(panels.length).toBe(2);
      panels.forEach(panel => {
        expect(panel.parentElement?.parentElement?.className).toContain('panel-list__panel--outline');
      });
    });
  });
});
