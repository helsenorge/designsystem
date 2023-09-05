import * as React from 'react';

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Trigger from './Trigger';

describe('Gitt at Trigger skal vises', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så vises beskrivelsen', () => {
      render(<Trigger ariaLabel="Hjelp" />);

      const trigger = screen.getByLabelText('Hjelp');

      expect(trigger).toBeVisible();
    });
  });

  describe('Når komponenten får en tekst via id', () => {
    it('Så vises beskrivelsen', () => {
      render(
        <>
          <p id="test">{'Hjelp'}</p>
          <Trigger ariaLabelledById="test" />
        </>
      );

      const trigger = screen.getByLabelText('Hjelp');

      expect(trigger).toBeVisible();
    });
  });

  describe('Når komponenten får en tekst via id og label', () => {
    it('Så brukes beskrivelsen fra id', () => {
      render(
        <>
          <p id="test">{'Hjelp'}</p>
          <Trigger ariaLabelledById="test" ariaLabel="Annen tekst" />
        </>
      );

      const trigger = screen.getByLabelText('Hjelp');

      expect(trigger).toBeVisible();
    });
  });

  describe('Når komponenten får en css-klasse', () => {
    it('Så brukes css-klassen', () => {
      render(<Trigger ariaLabel="Hjelp" className="test" />);

      const trigger = screen.getByLabelText('Hjelp');

      expect(trigger).toHaveClass('test');
    });
  });

  describe('Når man klikker på triggeren', () => {
    it('Så kalles onClick-callback', async () => {
      const handleClick = jest.fn();
      render(<Trigger ariaLabel="Hjelp" onClick={handleClick} />);

      const trigger = screen.getByLabelText('Hjelp');

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

        return <Trigger ref={ref} ariaLabel="Hjelp" />;
      };

      render(<WithRef />);

      const trigger = screen.getByLabelText('Hjelp');

      expect(trigger).toHaveFocus();
    });
  });

  describe('Når selected ikke er satt', () => {
    it('Så er aria-expanded=false', async () => {
      render(<Trigger ariaLabel="Hjelp" />);

      const trigger = screen.getByLabelText('Hjelp');

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når selected er true', () => {
    it('Så er aria-expanded=true', async () => {
      render(<Trigger selected ariaLabel="Hjelp" />);

      const trigger = screen.getByLabelText('Hjelp');

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });
  describe('Når data-triggerid=default', () => {
    it('Så har knappen data-triggerid=default', async () => {
      render(<Trigger selected ariaLabel="Hjelp" data-triggerid={'default'} />);

      const trigger = screen.getByLabelText('Hjelp');

      expect(trigger).toHaveAttribute('data-triggerid', 'default');
    });
  });
});
