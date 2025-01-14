import React from 'react';

import { render } from '@testing-library/react';

import Drawer from './Drawer';

describe('Gitt at Drawer skal vises', (): void => {
  describe('Når Drawer vises', (): void => {
    test('Så vises Drawer', (): void => {
      render(<Drawer />);
    });
  });
});
