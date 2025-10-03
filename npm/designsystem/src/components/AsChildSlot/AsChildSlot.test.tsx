import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import AsChildSlot, { AsChildSlotHandle } from './AsChildSlot';

describe('Gitt at AsChildSlot skal vises', () => {
  describe('Når AsChildSlot vises', () => {
    test('Så rendres ingenting når active=false', () => {
      render(
        <AsChildSlot active={false}>
          <button data-testid="child" />
        </AsChildSlot>
      );
      expect(screen.queryByTestId('child')).toBeNull();
    });

    test('Så rendres barn skjult når active=true', () => {
      render(
        <AsChildSlot active>
          <button data-testid="child" />
        </AsChildSlot>
      );
      const child = screen.getByTestId('child');
      // jest-dom matcher: ikke synlig siden wrapper har display:none
      expect(child).not.toBeVisible();
    });

    test('Så ignoreres manglende barn uten å kaste feil', () => {
      render(<AsChildSlot active />);
      // Bare at render ikke kaster er nok
      expect(true).toBe(true);
    });
  });

  describe('Når AsChildSlot interageres med via ref', () => {
    test('Så kalles onClick på Button-barn når click() brukes', () => {
      const handleClick = vi.fn();
      const ref = React.createRef<AsChildSlotHandle>();

      render(
        <AsChildSlot active ref={ref}>
          <button data-testid="child" onClick={handleClick} />
        </AsChildSlot>
      );

      ref.current?.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('Så kalles onClick på AnchorLink-barn når click() brukes (uten navigasjon)', () => {
      const handleClick = vi.fn((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
      });
      const ref = React.createRef<AsChildSlotHandle>();

      render(
        <AsChildSlot active ref={ref}>
          <a data-testid="child" href="#" target="_blank" onClick={handleClick} />
        </AsChildSlot>
      );

      ref.current?.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('Så gjør click() ingenting når barn er disabled', () => {
      const handleClick = vi.fn();
      const ref = React.createRef<AsChildSlotHandle>();

      render(
        <AsChildSlot active ref={ref}>
          <button data-testid="child" disabled onClick={handleClick} />
        </AsChildSlot>
      );

      ref.current?.click();
      expect(handleClick).not.toHaveBeenCalled();
    });

    test('Så gjør click() ingenting når barn har aria-disabled=true', () => {
      const handleClick = vi.fn();
      const ref = React.createRef<AsChildSlotHandle>();

      render(
        <AsChildSlot active ref={ref}>
          <a data-testid="child" href="#" aria-disabled="true" onClick={handleClick} />
        </AsChildSlot>
      );

      ref.current?.click();
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Når AsChildSlot håndterer refs', () => {
    test('Så videresendes child-ref riktig', () => {
      const childRef = React.createRef<HTMLButtonElement>();

      render(
        <AsChildSlot active>
          <button data-testid="child" ref={childRef} />
        </AsChildSlot>
      );

      expect(childRef.current).toBeInstanceOf(HTMLElement);
    });
  });
});
