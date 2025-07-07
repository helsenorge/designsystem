import * as React from 'react';

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HelpTriggerInline from './HelpTriggerInline';

describe('Gitt at HelpTriggerInline skal vises', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så vises beskrivelsen', () => {
      render(<HelpTriggerInline ariaLabel="Hjelp">{'test'}</HelpTriggerInline>);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toBeVisible();
    });
  });

  describe('Når komponenten får en tekst via id', () => {
    it('Så vises beskrivelsen', () => {
      render(
        <>
          <p id="test">{'Hjelp'}</p>
          <HelpTriggerInline ariaLabelledById="test">{'test'}</HelpTriggerInline>
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
          <HelpTriggerInline ariaLabelledById="test" ariaLabel="Annen tekst">
            {'test'}
          </HelpTriggerInline>
        </>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toBeVisible();
    });
  });

  describe('Når komponenten får en css-klasse', () => {
    it('Så brukes css-klassen', () => {
      render(
        <HelpTriggerInline ariaLabel="Hjelp" className="test">
          {'test'}
        </HelpTriggerInline>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveClass('test');
    });
  });

  describe('Når man klikker på knappen', () => {
    it('Så kalles onClick-callback', async () => {
      const handleClick = vi.fn();
      render(
        <HelpTriggerInline ariaLabel="Hjelp" onClick={handleClick}>
          {'test'}
        </HelpTriggerInline>
      );

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

        return (
          <HelpTriggerInline ref={ref} ariaLabel="Hjelp">
            {'test'}
          </HelpTriggerInline>
        );
      };

      render(<WithRef />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveFocus();
    });
  });

  describe('Når aria-expanded er true', () => {
    it('Så settes verdien på komponenten', async () => {
      render(
        <HelpTriggerInline aria-expanded={true} ariaLabel="Hjelp">
          {'test'}
        </HelpTriggerInline>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveAttribute('aria-expanded', 'true');
    });
  });
  describe('Når data-triggerid=default', () => {
    it('Så har knappen data-triggerid=default', async () => {
      render(
        <HelpTriggerInline ariaLabel="Hjelp" data-triggerid={'default'}>
          {'test'}
        </HelpTriggerInline>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveAttribute('data-triggerid', 'default');
    });
  });
});
