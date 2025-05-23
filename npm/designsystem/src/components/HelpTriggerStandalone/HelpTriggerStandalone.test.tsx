import * as React from 'react';

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HelpTriggerStandalone from './HelpTriggerStandalone';

describe('Gitt at HelpTriggerStandalone skal vises', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så vises beskrivelsen', () => {
      render(<HelpTriggerStandalone ariaLabel="Hjelp">{'test'}</HelpTriggerStandalone>);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toBeVisible();
    });
  });

  describe('Når komponenten får en tekst via id', () => {
    it('Så vises beskrivelsen', () => {
      render(
        <>
          <p id="test">{'Hjelp'}</p>
          <HelpTriggerStandalone ariaLabelledById="test">{'test'}</HelpTriggerStandalone>
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
          <HelpTriggerStandalone ariaLabelledById="test" ariaLabel="Annen tekst">
            {'test'}
          </HelpTriggerStandalone>
        </>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toBeVisible();
    });
  });

  describe('Når komponenten får en css-klasse', () => {
    it('Så brukes css-klassen', () => {
      render(
        <HelpTriggerStandalone ariaLabel="Hjelp" className="test">
          {'test'}
        </HelpTriggerStandalone>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveClass('test');
    });
  });

  describe('Når man klikker på knappen', () => {
    it('Så kalles onClick-callback', async () => {
      const handleClick = vi.fn();
      render(
        <HelpTriggerStandalone ariaLabel="Hjelp" onClick={handleClick}>
          {'test'}
        </HelpTriggerStandalone>
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
          <HelpTriggerStandalone ref={ref} ariaLabel="Hjelp">
            {'test'}
          </HelpTriggerStandalone>
        );
      };

      render(<WithRef />);

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveFocus();
    });
  });

  describe('Når aria-expanded=true er true', () => {
    it('Så settes det på komponenten', async () => {
      render(
        <HelpTriggerStandalone aria-expanded={true} ariaLabel="Hjelp">
          {'test'}
        </HelpTriggerStandalone>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveAttribute('aria-expanded', 'true');
    });
  });
  describe('Når data-triggerid=default', () => {
    it('Så har knappen data-triggerid=default', async () => {
      render(
        <HelpTriggerStandalone ariaLabel="Hjelp" data-triggerid={'default'}>
          {'test'}
        </HelpTriggerStandalone>
      );

      const helpTrigger = screen.getByLabelText('Hjelp');

      expect(helpTrigger).toHaveAttribute('data-triggerid', 'default');
    });
  });
});
