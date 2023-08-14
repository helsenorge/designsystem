import React from 'react';

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DictionaryTrigger from './DictionaryTrigger';

describe('Gitt at DictionaryTrigger skal vises', (): void => {
  describe('Når DictionaryTrigger vises', (): void => {
    test('Så vises DictionaryTrigger', (): void => {
      render(<DictionaryTrigger>{'Hjelp'}</DictionaryTrigger>);

      const trigger = screen.getByRole('button', { name: 'Hjelp' });

      expect(trigger).toBeVisible();
    });
  });

  describe('Når komponenten får en css-klasse', () => {
    it('Så brukes css-klassen', () => {
      render(<DictionaryTrigger className="test">{'Hjelp'}</DictionaryTrigger>);

      const trigger = screen.getByRole('button', { name: 'Hjelp' });

      expect(trigger).toHaveClass('test');
    });
  });

  describe('Når man klikker på triggeren', () => {
    it('Så kalles onClick-callback', async () => {
      const handleClick = jest.fn();
      render(<DictionaryTrigger onClick={handleClick}>{'Hjelp'}</DictionaryTrigger>);

      const trigger = screen.getByRole('button', { name: 'Hjelp' });

      await act(async () => await userEvent.click(trigger));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når man sender inn en ref for å sette fokus', () => {
    it('Så får triggeren fokus', async () => {
      const WithRef: React.FC = () => {
        const ref = React.useRef<HTMLButtonElement>(null);

        React.useEffect(() => {
          ref?.current?.focus();
        }, [ref]);

        return <DictionaryTrigger ref={ref}>{'Hjelp'}</DictionaryTrigger>;
      };

      render(<WithRef />);

      const trigger = screen.getByRole('button', { name: 'Hjelp' });

      expect(trigger).toHaveFocus();
    });
  });

  describe('Når man tabber', () => {
    it('Så kalles onFocus og onBlur', async () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();

      render(
        <DictionaryTrigger onFocus={handleFocus} onBlur={handleBlur}>
          {'Hjelp'}
        </DictionaryTrigger>
      );

      const trigger = screen.getByRole('button', { name: 'Hjelp' });

      await userEvent.tab();

      expect(trigger).toHaveFocus();
      expect(handleFocus).toHaveBeenCalledTimes(1);
      expect(handleBlur).toHaveBeenCalledTimes(0);

      await userEvent.tab();

      expect(handleFocus).toHaveBeenCalledTimes(1);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når selected ikke er satt', () => {
    it('Så er aria-expanded=false', async () => {
      render(<DictionaryTrigger>{'Hjelp'}</DictionaryTrigger>);

      const trigger = screen.getByRole('button', { name: 'Hjelp' });

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når selected er true', () => {
    it('Så er aria-expanded=true', async () => {
      render(<DictionaryTrigger selected>{'Hjelp'}</DictionaryTrigger>);

      const trigger = screen.getByRole('button', { name: 'Hjelp' });

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });
});
