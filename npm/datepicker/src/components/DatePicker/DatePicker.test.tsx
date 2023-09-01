import React from 'react';

import { render } from '@testing-library/react';

import DatePicker from './DatePicker';

describe('Gitt at DatePicker skal vises', (): void => {
  describe('Når DatePicker vises', (): void => {
    test('Så vises DatePicker', (): void => {
      render(<DatePicker />);
    });
  });
});
