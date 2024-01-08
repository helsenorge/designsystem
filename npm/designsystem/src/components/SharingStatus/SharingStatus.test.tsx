import * as React from 'react';

import { render, screen } from '@testing-library/react';

import Eye from '../Icons/Eye';

import SharingStatus from '.';

describe('Gitt at SharingStatus rendres ', () => {
  describe('Når komponentet får en tekst', () => {
    it('Så skal teksten vises til innbygger', () => {
      render(<SharingStatus icon={Eye}>{'Eksempeltekst'}</SharingStatus>);

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();
      expect(text).toHaveTextContent('Eksempeltekst');
    });
  });

  describe('Når komponentet vises', () => {
    it('Så skal innbygger se ikonet', () => {
      render(<SharingStatus icon={Eye}>{'Eksempeltekst'}</SharingStatus>);

      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();
    });
  });

  describe('Når SharingStatus er av color="kiwi"', () => {
    it('Så skal ikonet og teksten ha fargen "kiwi"', () => {
      render(
        <SharingStatus icon={Eye} color={'kiwi'} testId={'sharingStatus'}>
          {'Eksempeltekst'}
        </SharingStatus>
      );

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();
      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();

      const sharingStatusIcon = screen.getByTestId('sharingStatus');
      const sharingStatusText = screen.getByText('Eksempeltekst');
      // eslint-disable-next-line
      expect(sharingStatusIcon.firstElementChild?.className).toBe('sharing-status__dot sharing-status__dot--kiwi');
      expect(sharingStatusText).toHaveClass('sharing-status__label sharing-status__label--kiwi');
    });
  });

  describe('Når SharingStatus er av color="cherry"', () => {
    it('Så skal ikonet og teksten ha fargen "cherry"', () => {
      render(
        <SharingStatus icon={Eye} color={'cherry'} testId={'sharingStatus'}>
          {'Eksempeltekst'}
        </SharingStatus>
      );

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();
      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();

      const sharingStatusIcon = screen.getByTestId('sharingStatus');
      const sharingStatusText = screen.getByText('Eksempeltekst');
      // eslint-disable-next-line
      expect(sharingStatusIcon.firstElementChild?.className).toBe('sharing-status__dot sharing-status__dot--cherry');
      expect(sharingStatusText).toHaveClass('sharing-status__label sharing-status__label--cherry');
    });
  });

  describe('Når SharingStatus er av color="neutral"', () => {
    it('Så skal ikonet og teksten ha fargen "neutral"', () => {
      render(
        <SharingStatus icon={Eye} color={'neutral'} testId={'sharingStatus'}>
          {'Eksempeltekst'}
        </SharingStatus>
      );

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();
      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();

      const sharingStatusIcon = screen.getByTestId('sharingStatus');
      const sharingStatusText = screen.getByText('Eksempeltekst');
      // eslint-disable-next-line
      expect(sharingStatusIcon.firstElementChild?.className).toBe('sharing-status__dot sharing-status__dot--neutral');
      expect(sharingStatusText).toHaveClass('sharing-status__label sharing-status__label--neutral');
    });
  });

  describe('Når SharingStatus er av color="blueberry"', () => {
    it('Så skal ikonet og teksten ha fargen "blueberry"', () => {
      render(
        <SharingStatus icon={Eye} color={'blueberry'} testId={'sharingStatus'}>
          {'Eksempeltekst'}
        </SharingStatus>
      );

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();
      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();

      const sharingStatusIcon = screen.getByTestId('sharingStatus');
      const sharingStatusText = screen.getByText('Eksempeltekst');
      // eslint-disable-next-line
      expect(sharingStatusIcon.firstElementChild?.className).toBe('sharing-status__dot sharing-status__dot--blueberry');
      expect(sharingStatusText).toHaveClass('sharing-status__label sharing-status__label--blueberry');
    });
  });

  describe('Når SharingStatus er av color="banana"', () => {
    it('Så skal ikonet og teksten ha fargen "banana"', () => {
      render(
        <SharingStatus icon={Eye} color={'banana'} testId={'sharingStatus'}>
          {'Eksempeltekst'}
        </SharingStatus>
      );

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();
      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();

      const sharingStatusIcon = screen.getByTestId('sharingStatus');
      const sharingStatusText = screen.getByText('Eksempeltekst');
      // eslint-disable-next-line
      expect(sharingStatusIcon.firstElementChild?.className).toBe('sharing-status__dot sharing-status__dot--banana');
      expect(sharingStatusText).toHaveClass('sharing-status__label sharing-status__label--banana');
    });
  });

  describe('Når SharingStatus er satt til wrapText="true"', () => {
    it('Så skal en lang tekst wrappe', () => {
      render(
        <SharingStatus icon={Eye} wrapText={true} testId={'sharingStatus'}>
          {'Eksempeltekst'}
        </SharingStatus>
      );

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();

      const wrapText = screen.getByText('Eksempeltekst');
      expect(wrapText).toHaveClass('sharing-status__label sharing-status__label--blueberry sharing-status__label--wrap');
    });
  });

  describe('Når SharingStatus vises', () => {
    it('Så skal ikke teksten wrappe', () => {
      render(
        <SharingStatus icon={Eye} testId={'sharingStatus'}>
          {'Eksempeltekst'}
        </SharingStatus>
      );

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();

      const wrapText = screen.getByText('Eksempeltekst');
      expect(wrapText).not.toHaveClass('sharing-status__label sharing-status__label--blueberry sharing-status__label--wrap');
    });
  });
});
