import React from 'react';

import { render, screen } from '@testing-library/react';

import DatePicker from './DatePicker';
import Label from '../../../../designsystem/src/components/Label';

describe('Gitt at DatePicker skal vises', (): void => {
  describe('Når DatePicker vises', (): void => {
    test('Så vises DatePicker', (): void => {
      render(<DatePicker label={<Label labelTexts={[{ text: 'Dato' }]} />} />);

      const label = screen.queryByText('Dato');
      expect(label).toBeVisible();

      const input = screen.getByRole('textbox');
      expect(input).toBeVisible();
      expect(input).toHaveClass('content-wrapper__input');

      const inputButton = screen.getByRole('button');
      expect(inputButton).toBeVisible();
    });
  });
});
