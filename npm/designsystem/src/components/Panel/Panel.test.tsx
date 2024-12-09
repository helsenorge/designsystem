import { render } from '@testing-library/react';

import Panel from './Panel';

describe('Gitt at PanelNew skal vises', (): void => {
  describe('Når PanelNew vises', (): void => {
    test('Så vises PanelNew', (): void => {
      render(<Panel />);
    });
  });
});
