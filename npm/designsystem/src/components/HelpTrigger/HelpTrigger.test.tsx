import * as React from 'react';

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HelpTrigger from './HelpTrigger';

describe('Gitt at HelpTrigger skal vises', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så vises beskrivelsen', () => {
      render(<HelpTrigger ariaLabel="Hjelp" />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toBeVisible();
    });
  });

  describe('Når komponenten får en tekst via id', () => {
    it('Så vises beskrivelsen', () => {
      render(
        <>
          <p id="test">{'Hjelp'}</p>
          <HelpTrigger ariaLabelledById="test" />
        </>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toBeVisible();
    });
  });

  describe('Når komponenten får en tekst via id og label', () => {
    it('Så brukes beskrivelsen fra id', () => {
      render(
        <>
          <p id="test">{'Hjelp'}</p>
          <HelpTrigger ariaLabelledById="test" ariaLabel="Annen tekst" />
        </>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toBeVisible();
    });
  });

  describe('Når komponenten får en css-klasse', () => {
    it('Så brukes css-klassen', () => {
      render(<HelpTrigger ariaLabel="Hjelp" className="test" />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveClass('test');
    });
  });

  describe('Når man klikker på knappen', () => {
    it('Så kalles onClick-callback', async () => {
      const handleClick = vi.fn();
      render(<HelpTrigger ariaLabel="Hjelp" onClick={handleClick} />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      await act(async () => await userEvent.click(helpTrigger));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når man sender inn en ref for å sette fokus', () => {
    it('Så får knappen fokus', async () => {
      const WithRef: React.FC = () => {
        const ref = React.useRef<HTMLButtonElement>(null);

        React.useEffect(() => {
          ref?.current?.focus();
        }, [ref]);

        return <HelpTrigger ref={ref} ariaLabel="Hjelp" />;
      };

      render(<WithRef />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveFocus();
    });
  });

  describe('Når selected ikke er satt', () => {
    it('Så er aria-expanded=false', async () => {
      render(<HelpTrigger ariaLabel="Hjelp" />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når selected er true', () => {
    it('Så er aria-expanded=true', async () => {
      render(<HelpTrigger selected ariaLabel="Hjelp" />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveAttribute('aria-expanded', 'true');
    });
  });
  describe('Når data-triggerid=default', () => {
    it('Så har knappen data-triggerid=default', async () => {
      render(<HelpTrigger selected ariaLabel="Hjelp" data-triggerid={'default'} />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveAttribute('data-triggerid', 'default');
    });
  });
  describe('Når htmlMarkup=span', () => {
    it('Så kan den finnes med testid', async () => {
      render(<HelpTrigger htmlMarkup="span" testId="helpTrigger" />);

      const helpTrigger = screen.getByTestId('helpTrigger');

      expect(helpTrigger).toBeVisible();
    });
  });
});
