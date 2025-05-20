import React from 'react';

import { render } from '@testing-library/react';

import HelpDrawer from './HelpDrawer';

describe('Gitt at HelpDrawer skal vises', (): void => {
  describe('Når HelpDrawer vises', (): void => {
    test('Så vises HelpDrawer', (): void => {
      render(<HelpDrawer />);
    });
  });
});
