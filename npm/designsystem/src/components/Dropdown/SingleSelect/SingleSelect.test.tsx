import type React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { SingleSelect } from './SingleSelect';
import SingleSelectItem from './SingleSelectItem';

describe('Gitt at Radio skal vises', () => {
  describe('Når Radio rendres', () => {
    test('Så vises Radio med tekst og “dot” (via knapp)', () => {
      render(
        <SingleSelect>
          <SingleSelectItem inputId="test01" text="Radio1" />
        </SingleSelect>
      );

      const control = screen.getByRole('button');
      expect(control).toBeInTheDocument();
      expect(screen.getByText('Radio1')).toBeVisible();
    });

    test('Så vises Radio som disabled når disabled=true', () => {
      render(
        <SingleSelect>
          <SingleSelectItem text="Radio1" disabled />
        </SingleSelect>
      );

      const control = screen.getByRole('button');
      expect(control).toHaveAttribute('aria-disabled', 'true');
    });

    test('Så vises Radio som valgt når verdi matcher gruppens defaultValue', () => {
      render(
        <SingleSelect defaultValue="v1">
          <SingleSelectItem value="v1" text="Radio1" />
        </SingleSelect>
      );
      const control = screen.getByRole('button');
      expect(control).toHaveAttribute('aria-current', 'true');
    });

    test('Så settes testId på wrapper når testId er satt', () => {
      render(
        <SingleSelect>
          <SingleSelectItem testId="RadioTest" text="Label" />
        </SingleSelect>
      );
      expect(screen.getByTestId('RadioTest')).toBeDefined();
    });

    test('Så kan SingleSelectItem markeres som valgt med defaultSelected (uten defaultValue på gruppa)', () => {
      const handleChange = vi.fn();
      render(
        <SingleSelect onValueChange={handleChange}>
          <SingleSelectItem value="foo" defaultSelected text="Foo" />
          <SingleSelectItem value="bar" text="Bar" />
        </SingleSelect>
      );

      const control = screen.getByRole('button', { name: 'Foo' });
      expect(control).toHaveAttribute('aria-current', 'true');

      // Mount-effekten i SingleSelectItem kaller onValueChange én gang (uten event)
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith('foo', undefined);
    });
  });

  describe('Når Radio interageres med', () => {
    test('Så kalles onValueChange når den velges', () => {
      const handleChange = vi.fn();
      render(
        <SingleSelect onValueChange={handleChange}>
          <SingleSelectItem value="Radio1" text="Radio1" />
        </SingleSelect>
      );

      fireEvent.click(screen.getByText('Radio1'));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith('Radio1', expect.any(Object));
    });

    test('Så er den ikke valgt når gruppens defaultValue ikke matcher', () => {
      render(
        <SingleSelect defaultValue="annen">
          <SingleSelectItem value="Radio1" text="Radio1" />
        </SingleSelect>
      );
      const control = screen.getByRole('button');
      expect(control).not.toHaveAttribute('aria-current', 'true');
    });

    test('Så blir Radio valgt når det klikkes på teksten', () => {
      const handleChange = vi.fn();
      render(
        <SingleSelect onValueChange={handleChange}>
          <SingleSelectItem value="Radio1" text="Radio1" />
        </SingleSelect>
      );

      fireEvent.click(screen.getByText('Radio1'));
      expect(handleChange).toHaveBeenCalledWith('Radio1', expect.any(Object));
    });
  });

  describe('Når asChild brukes', () => {
    test('Så trigges Button-barnets onClick når radio blir valgt', () => {
      const handleClick = vi.fn();
      const handleChange = vi.fn();

      render(
        <SingleSelect onValueChange={handleChange}>
          <SingleSelectItem asChild value="btn" text="As Button">
            <button onClick={handleClick} />
          </SingleSelectItem>
        </SingleSelect>
      );

      // Første klikk → velger item → onValueChange + child onClick
      fireEvent.click(screen.getByText('As Button'));
      expect(handleChange).toHaveBeenCalledWith('btn', expect.any(Object));
      expect(handleClick).toHaveBeenCalledTimes(1);

      // Nytt klikk når allerede valgt → ingen ny change, men child onClick fyres igjen
      fireEvent.click(screen.getByText('As Button'));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledTimes(2);
    });

    test('Så trigges AnchorLink-barnets onClick (uten navigasjon) når radio blir valgt', () => {
      const handleClick = vi.fn((e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault());
      const handleChange = vi.fn();

      render(
        <SingleSelect onValueChange={handleChange}>
          <SingleSelectItem asChild value="link" text="As Link">
            <a href="#" target="_blank" onClick={handleClick} />
          </SingleSelectItem>
        </SingleSelect>
      );

      fireEvent.click(screen.getByText('As Link'));
      expect(handleChange).toHaveBeenCalledWith('link', expect.any(Object));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('Så trigges ikke child når Radio er disabled', () => {
      const handleClick = vi.fn();
      const handleChange = vi.fn();

      render(
        <SingleSelect onValueChange={handleChange}>
          <SingleSelectItem asChild disabled value="x" text="Disabled">
            <button onClick={handleClick} />
          </SingleSelectItem>
        </SingleSelect>
      );

      fireEvent.click(screen.getByText('Disabled'));
      const control = screen.getByRole('button', { name: 'Disabled' });
      expect(control).toHaveAttribute('aria-disabled', 'true');
      expect(handleChange).not.toHaveBeenCalled();
      expect(handleClick).not.toHaveBeenCalled();
    });

    test('Så kan Space trigge child-aksjonen (via AsChildSlot keydown)', () => {
      const handleClick = vi.fn();
      const handleChange = vi.fn();

      render(
        <SingleSelect onValueChange={handleChange}>
          <SingleSelectItem asChild value="kbd" text="Keyboard">
            <button onClick={handleClick} />
          </SingleSelectItem>
        </SingleSelect>
      );

      const control = screen.getByRole('button', { name: 'Keyboard' });
      control.focus();
      // AsChildSlot binder Space til click
      fireEvent.keyDown(control, { key: ' ', code: 'Space' });

      expect(handleChange).toHaveBeenCalledWith('kbd', expect.any(Object));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
