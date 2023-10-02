import React from 'react';

import { render, screen } from '@testing-library/react';

import RadioGroup from './RadioGroup';
import RadioGroupButton from './RadioGroupButton';
import Label from '../Label';

describe('Gitt at RadioGroup skal vises', (): void => {
  describe('Når RadioGroup vises', (): void => {
    test('Så vises RadioGroup', (): void => {
      render(
        <RadioGroup id="Test" name={''} defaultCheckedRadioButton={0} onChange={undefined}>
          <RadioGroupButton label={<Label labelTexts={[{ text: 'Radio1' }]} />} />
        </RadioGroup>
      );

      const label = screen.getByText('Radio1').parentElement?.parentElement?.parentElement;
      expect(label).toBeVisible();
      expect(label).toHaveClass('radio-button-label');
    });
  });
});
