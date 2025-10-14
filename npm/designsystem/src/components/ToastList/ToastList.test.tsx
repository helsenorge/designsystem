import React from 'react';

import { render } from '@testing-library/react';

import ToastList from './ToastList';

describe('Gitt at ToastList skal vises', (): void => {
  describe('Når ToastList vises', (): void => {
    test('Så vises ToastList', (): void => {
      render(<ToastList />);
    });
  });
});
