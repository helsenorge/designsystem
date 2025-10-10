import React from 'react';

import { render } from '@testing-library/react';

import FormFieldTag from './FormFieldTag';

// @todo: legge til tester

describe('Gitt at FormFieldTag skal vises', (): void => {
  describe('Når FormFieldTag vises', (): void => {
    test('Så vises FormFieldTag', (): void => {
      render(<FormFieldTag level="all-required" />);
    });
  });
});
