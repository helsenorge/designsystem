import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PromoPanel from './PromoPanel';

describe('Gitt at PromoPanel skal vises', (): void => {
  describe('Når PromoPanel har tittel og lenke', (): void => {
    test('Så brukes tittelen som lenketekst', (): void => {
      render(<PromoPanel title="Tittel" href="/" />);

      const heading = screen.getByRole('heading', { name: 'Tittel' });
      expect(heading).toBeVisible();

      const link = screen.getByRole('link', { name: 'Tittel' });
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href', '/');
    });
  });

  describe('Når PromoPanel har tittel, lenke og tekst', (): void => {
    test('Så brukes tittelen som lenketekst', (): void => {
      render(
        <PromoPanel title="Tittel" href="/">
          {'Tekst'}
        </PromoPanel>
      );

      const heading = screen.getByRole('heading', { name: 'Tittel' });
      expect(heading).toBeVisible();

      const link = screen.getByRole('link', { name: 'Tittel' });
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href', '/');

      const text = screen.getByText('Tekst');
      expect(text).toBeVisible();
    });
  });

  describe('Når PromoPanel har lenke og tekst', (): void => {
    test('Så brukes tekst som lenketekst', (): void => {
      render(<PromoPanel href="/">{'Tekst'}</PromoPanel>);

      const heading = screen.queryByRole('heading');
      expect(heading).not.toBeInTheDocument();

      const link = screen.getByRole('link', { name: 'Tekst' });
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href', '/');
    });
  });

  describe('Når tittel er satt, og lenke skal rendres som button', (): void => {
    test('Så kan man klikke på knappen', async (): Promise<void> => {
      const mockClick = jest.fn();

      render(<PromoPanel title="Tittel" linkHtmlMarkup="button" linkOnClick={mockClick} />);

      const heading = screen.getByRole('heading', { name: 'Tittel' });
      expect(heading).toBeVisible();

      const button = screen.getByRole('button', { name: 'Tittel' });
      expect(button).toBeVisible();

      await userEvent.click(button);

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når tittel ikke er satt, og lenke skal rendres som button', (): void => {
    test('Så kan man klikke på knappen', async (): Promise<void> => {
      const mockClick = jest.fn();

      render(
        <PromoPanel linkHtmlMarkup="button" linkOnClick={mockClick}>
          {'Tekst'}
        </PromoPanel>
      );

      const heading = screen.queryByRole('heading');
      expect(heading).not.toBeInTheDocument();

      const button = screen.getByRole('button', { name: 'Tekst' });
      expect(button).toBeVisible();

      await userEvent.click(button);

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når det brukes en custom link component', (): void => {
    test('Så kan man klikke på knappen', async (): Promise<void> => {
      const mockClick = jest.fn();

      const customLink = <button onClick={mockClick} />;

      render(<PromoPanel linkComponent={customLink}>{'Tekst'}</PromoPanel>);

      const heading = screen.queryByRole('heading');
      expect(heading).not.toBeInTheDocument();

      const button = screen.getByRole('button', { name: 'Tekst' });
      expect(button).toBeVisible();

      await userEvent.click(button);

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });
});
