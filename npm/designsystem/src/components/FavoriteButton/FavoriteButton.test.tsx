import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import type { FavoriteButtonProps } from './FavoriteButton';

import FavoriteButton from './FavoriteButton';

describe('Gitt at FavoriteButton skal vises', () => {
  const defaultProps: FavoriteButtonProps = {
    checked: false,
    onClick: vi.fn(),
    testId: 'favorite-button',
  };

  it('så får den riktig rolle', () => {
    render(<FavoriteButton {...defaultProps} />);
    const button = screen.getByTestId('favorite-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('role', 'switch');
    expect(button).toHaveAttribute('aria-checked', 'false');
  });

  it('vises den som valgt hvis checked er satt', () => {
    render(<FavoriteButton {...defaultProps} checked={true} />);
    const button = screen.getByTestId('favorite-button');
    expect(button).toHaveAttribute('aria-checked', 'true');
  });

  it('kaller onclick når den klikkes', () => {
    const onClickMock = vi.fn();
    render(<FavoriteButton {...defaultProps} onClick={onClickMock} />);
    const button = screen.getByTestId('favorite-button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('setter riktig tabIndex', () => {
    render(<FavoriteButton {...defaultProps} tabIndex={0} />);
    const button = screen.getByTestId('favorite-button');
    expect(button).toHaveAttribute('tabIndex', '0');
  });

  it('setter riktig id', () => {
    render(<FavoriteButton {...defaultProps} id="favorite-btn" />);
    const button = screen.getByTestId('favorite-button');
    expect(button).toHaveAttribute('id', 'favorite-btn');
  });
});
