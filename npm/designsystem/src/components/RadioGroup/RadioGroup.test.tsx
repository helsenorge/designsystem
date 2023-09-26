import React from 'react';

import { render } from '@testing-library/react';

import RadioGroup from './RadioGroup';

describe('Gitt at RadioGroup skal vises', (): void => {
  describe('Når RadioGroup vises', (): void => {
    test('Så vises RadioGroup', (): void => {
      render(<RadioGroup />);
    });
  });
});
