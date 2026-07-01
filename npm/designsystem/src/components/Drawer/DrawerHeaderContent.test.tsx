import { createRef } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';

import DrawerHeaderContent from './DrawerHeaderContent';

describe('Gitt at DrawerHeaderContent skal vises', () => {
  describe('Når en tittel er gitt', () => {
    test('Så vises tittelteksten', () => {
      render(<DrawerHeaderContent title="Min tittel" />);

      expect(screen.getByText('Min tittel')).toBeInTheDocument();
    });

    test('Så brukes h3 som standard element for tittelen', () => {
      render(<DrawerHeaderContent title="Min tittel" />);

      expect(screen.getByRole('heading', { level: 3, name: 'Min tittel' })).toBeInTheDocument();
    });

    test('Så brukes titleHtmlMarkup som element for tittelen når det er gitt', () => {
      render(<DrawerHeaderContent title="Min tittel" titleHtmlMarkup="h2" />);

      expect(screen.getByRole('heading', { level: 2, name: 'Min tittel' })).toBeInTheDocument();
    });

    test('Så settes titleId som id på tittelen når det er gitt', () => {
      render(<DrawerHeaderContent title="Min tittel" titleId="my-title-id" />);

      expect(screen.getByRole('heading', { name: 'Min tittel' })).toHaveAttribute('id', 'my-title-id');
    });

    test('Så videresendes titleRef til tittel-elementet', () => {
      const titleRef = createRef<HTMLHeadingElement>();

      render(<DrawerHeaderContent title="Min tittel" titleRef={titleRef} />);

      expect(titleRef.current).not.toBeNull();
      expect(titleRef.current?.tagName).toBe('H3');
      expect(titleRef.current).toHaveTextContent('Min tittel');
    });
  });

  describe('Når withBackButton ikke er satt', () => {
    test('Så vises ingen tilbakeknapp', () => {
      render(<DrawerHeaderContent title="Min tittel" onRequestBack={() => undefined} />);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('Når withBackButton er satt', () => {
    test('Så vises en tilbakeknapp', () => {
      render(<DrawerHeaderContent title="Min tittel" withBackButton onRequestBack={() => undefined} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('Så brukes standard aria-label på tilbakeknappen', () => {
      render(<DrawerHeaderContent title="Min tittel" withBackButton onRequestBack={() => undefined} />);

      expect(screen.getByRole('button', { name: 'Tilbake' })).toBeInTheDocument();
    });

    test('Så brukes backButtonAriaLabel på tilbakeknappen når det er gitt', () => {
      render(<DrawerHeaderContent title="Min tittel" withBackButton backButtonAriaLabel="Gå tilbake" onRequestBack={() => undefined} />);

      expect(screen.getByRole('button', { name: 'Gå tilbake' })).toBeInTheDocument();
    });

    test('Så kalles onRequestBack når tilbakeknappen klikkes', async () => {
      const onRequestBack = vi.fn();

      render(<DrawerHeaderContent title="Min tittel" withBackButton onRequestBack={onRequestBack} />);
      await userEvent.click(screen.getByRole('button', { name: 'Tilbake' }));

      expect(onRequestBack).toHaveBeenCalledTimes(1);
    });
  });
});
