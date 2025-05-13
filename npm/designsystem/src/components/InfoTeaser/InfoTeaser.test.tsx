import React from 'react';

import { render } from '@testing-library/react';

import InfoTeaser from './InfoTeaser';

describe('Gitt at InfoTeaser skal vises', (): void => {
  describe('Når InfoTeaser vises', (): void => {
    test('Så vises InfoTeaser', (): void => {
      render(<InfoTeaser />);
    });
  });
});
