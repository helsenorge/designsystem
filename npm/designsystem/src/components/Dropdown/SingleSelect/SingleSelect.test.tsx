import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import SingleSelectItem from './SingleSelectItem';
import Label from '../../Label';

describe('Gitt at Radio skal vises', () => {
  describe('Når Radio rendres', () => {
    test('Så vises Radio med label og input', () => {
      render(<SingleSelectItem inputId="test01" label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />} />);

      const label = screen.getByTestId('radio-label');
      expect(label).toBeVisible();
      expect(label).toHaveClass('radio-button-label');

      const input = screen.getByRole('radio');
      expect(input).toBeVisible();
      expect(input).toHaveClass('radio-button');
    });

    test('Så vises Radio som disabled når disabled=true', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'Radio1' }]} testId="radio-label" />} disabled />);

      const input = screen.getByRole('radio');
      const label = screen.getByTestId('radio-label');
      expect(input).toBeDisabled();
      expect(label).toHaveClass('radio-button-label radio-button-label--disabled');
    });

    test('Så vises Radio som checked når defaultChecked=true', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'Radio1' }]} />} defaultChecked />);
      expect(screen.getByRole('radio')).toBeChecked();
    });

    test('Så blir Radio checked når det klikkes på label', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'Radio1' }]} />} />);
      fireEvent.click(screen.getByText('Radio1'));
      expect(screen.getByRole('radio')).toBeChecked();
    });

    test('Så har input riktig name når name-prop er satt', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'En fin label' }]} />} name="custom-name" />);
      expect(screen.getByRole('radio')).toHaveAttribute('name', 'custom-name');
    });

    test('Så har input riktig value når value-prop er satt', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'En fin label' }]} />} value="custom-value" />);
      expect(screen.getByRole('radio')).toHaveAttribute('value', 'custom-value');
    });

    test('Så er input required når required=true', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'En fin label' }]} />} required />);
      expect(screen.getByRole('radio')).toBeRequired();
    });

    test('Så settes testId på wrapper når testId er satt', () => {
      render(<SingleSelectItem testId="RadioTest" label={<Label labelTexts={[{ text: 'Label' }]} />} />);
      expect(screen.getByTestId('RadioTest')).toBeDefined();
    });
  });

  describe('Når Radio interageres med', () => {
    test('Så kalles onChange når den velges', () => {
      const handleChange = vi.fn();
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'Radio1' }]} />} onChange={handleChange} />);
      fireEvent.click(screen.getByText('Radio1'));
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('Så er den default unchecked når verken checked eller defaultChecked er satt', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'Radio1' }]} />} />);
      expect(screen.getByRole('radio')).not.toBeChecked();
    });

    test('Så kan den være controlled (checked=true)', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'Radio1' }]} />} checked />);
      expect(screen.getByRole('radio')).toBeChecked();
    });

    test('Så kan den være controlled (checked=false)', () => {
      render(<SingleSelectItem label={<Label labelTexts={[{ text: 'Radio1' }]} />} checked={false} />);
      expect(screen.getByRole('radio')).not.toBeChecked();
    });
  });

  describe('Når asChild brukes', () => {
    test('Så trigges Button-barnets onClick når radio blir checked', () => {
      const handleClick = vi.fn();
      render(
        <SingleSelectItem asChild label={<Label labelTexts={[{ text: 'As Button' }]} />}>
          <button onClick={handleClick} />
        </SingleSelectItem>
      );

      // første klikk velger radio => asChildSlot.click() => child onClick kalles
      fireEvent.click(screen.getByText('As Button'));
      expect(screen.getByRole('radio')).toBeChecked();
      expect(handleClick).toHaveBeenCalledTimes(1);

      // nytt klikk på samme (allerede checked) radio skal ikke trigge igjen (onChange fyres ikke)
      fireEvent.click(screen.getByText('As Button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('Så trigges AnchorLink-barnets onClick (uten navigasjon) når radio blir checked', () => {
      const handleClick = vi.fn((e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault());
      render(
        <SingleSelectItem asChild label={<Label labelTexts={[{ text: 'As Link' }]} />}>
          <a href="#" target="_blank" onClick={handleClick} />
        </SingleSelectItem>
      );

      fireEvent.click(screen.getByText('As Link'));
      expect(screen.getByRole('radio')).toBeChecked();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('Så trigges ikke child når Radio er disabled', () => {
      const handleClick = vi.fn();
      render(
        <SingleSelectItem asChild disabled label={<Label labelTexts={[{ text: 'Disabled' }]} />}>
          <button onClick={handleClick} />
        </SingleSelectItem>
      );

      fireEvent.click(screen.getByText('Disabled'));
      expect(screen.getByRole('radio')).toBeDisabled();
      expect(handleClick).not.toHaveBeenCalled();
    });

    test('Så kan Enter trigge child-aksjonen', () => {
      const handleClick = vi.fn();
      render(
        <SingleSelectItem asChild label={<Label labelTexts={[{ text: 'Keyboard' }]} />}>
          <button onClick={handleClick} />
        </SingleSelectItem>
      );

      const input = screen.getByRole('radio');
      input.focus();
      fireEvent.keyDown(input, { key: 'Enter' });
      // Enter skal trigge child-aksjonen, men ikke nødvendigvis endre checked state her
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
