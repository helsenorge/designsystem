import React from 'react';

import { render } from '@testing-library/react';

import Panel from './Panel';

describe('Gitt at Panel skal vises', (): void => {
  describe('Når Panel vises', (): void => {
    test('Så vises Panel', (): void => {
      render(<Panel />);
    });
  });
});
