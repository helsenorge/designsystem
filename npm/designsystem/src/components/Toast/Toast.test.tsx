import React from 'react';

import { render } from '@testing-library/react';

import Toast from './Toast';

describe('Gitt at Toast skal vises', (): void => {
  describe('Når Toast vises', (): void => {
    test('Så vises Toast', (): void => {
      render(<Toast />);
    });
  });
});
