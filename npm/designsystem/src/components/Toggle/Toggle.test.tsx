import React from 'react';

import { render } from '@testing-library/react';

import Toggle from './Toggle';

describe('Gitt at Toggle skal vises', (): void => {
  describe('Når Toggle vises', (): void => {
    test('Så vises Toggle', (): void => {
      render(<Toggle />);
    });
  });
});
