import React from 'react';

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi as jest } from 'vitest';

import HelpQuestion from './HelpQuestion';
describe('Gitt at HelpQuestion skal vises', (): void => {
  describe('Når HelpQuestion vises', (): void => {
    test('Så vises HelpQuestion', (): void => {
      render(<HelpQuestion>{'Hjelp'}</HelpQuestion>);

      const question = screen.getByRole('button', { name: 'Hjelp' });

      expect(question).toBeVisible();
    });
  });

  describe('Når komponenten får en css-klasse', () => {
    it('Så brukes css-klassen', () => {
      render(<HelpQuestion className="test">{'Hjelp'}</HelpQuestion>);

      const question = screen.getByRole('button', { name: 'Hjelp' });

      expect(question).toHaveClass('test');
    });
  });

  describe('Når man klikker på triggeren', () => {
    it('Så kalles onClick-callback', async () => {
      const handleClick = jest.fn();
      render(<HelpQuestion onClick={handleClick}>{'Hjelp'}</HelpQuestion>);

      const question = screen.getByRole('button', { name: 'Hjelp' });

      await act(async () => await userEvent.click(question));

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

        return <HelpQuestion ref={ref}>{'Hjelp'}</HelpQuestion>;
      };

      render(<WithRef />);

      const question = screen.getByRole('button', { name: 'Hjelp' });

      expect(question).toHaveFocus();
    });
  });

  describe('Når selected ikke er satt', () => {
    it('Så er aria-expanded=false', async () => {
      render(<HelpQuestion>{'Hjelp'}</HelpQuestion>);

      const question = screen.getByRole('button', { name: 'Hjelp' });

      expect(question).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når selected er true', () => {
    it('Så er aria-expanded=true', async () => {
      render(<HelpQuestion selected>{'Hjelp'}</HelpQuestion>);

      const question = screen.getByRole('button', { name: 'Hjelp' });

      expect(question).toHaveAttribute('aria-expanded', 'true');
    });
  });
});
