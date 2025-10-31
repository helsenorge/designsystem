import { screen, render } from '@testing-library/react';

import PanelList from './PanelList';

describe('Gitt at PanelListOld skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<PanelList testId="bare-tester" />);

      const panelList = screen.getByTestId('bare-tester');
      expect(panelList).toBeVisible();
      expect(panelList).toHaveAttribute('data-analyticsid', 'panel-list');
    });
  });
});
