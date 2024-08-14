import React from 'react';

import { render, screen } from '@testing-library/react';

import EyebrowHeader from './EyebrowHeader';

describe('Gitt at EyebrowHeader skal vises', (): void => {
  describe('Når EyebrowHeader vises', (): void => {
    test('Så vises EyebrowHeader', (): void => {
      render(
        <EyebrowHeader>
          <EyebrowHeader.Subtitle>{'Stikktittel'}</EyebrowHeader.Subtitle>
          <EyebrowHeader.Title>{'Tittel'}</EyebrowHeader.Title>
        </EyebrowHeader>
      );

      const subtitle = screen.getByText('Stikktittel');
      expect(subtitle).toBeVisible();
      const title = screen.getByRole('heading', { name: 'Tittel' });
      expect(title).toBeVisible();
    });
  });
});
