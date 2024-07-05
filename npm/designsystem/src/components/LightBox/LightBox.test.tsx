import React from 'react';

import { render } from '@testing-library/react';

import LightBox from './LightBox';

describe('Gitt at LightBox skal vises', (): void => {
  describe('Når LightBox vises', (): void => {
    test('Så vises LightBox', (): void => {
      render(<LightBox />);
    });
  });
});
