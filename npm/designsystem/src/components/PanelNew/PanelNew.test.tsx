import React from 'react';

import { render } from '@testing-library/react';

import PanelNew from './PanelNew';

describe('Gitt at PanelNew skal vises', (): void => {
  describe('Når PanelNew vises', (): void => {
    test('Så vises PanelNew', (): void => {
      render(<PanelNew />);
    });
  });
});
