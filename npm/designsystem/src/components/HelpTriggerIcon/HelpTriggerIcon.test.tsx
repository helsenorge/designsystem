import { screen, render, fireEvent } from '@testing-library/react';

import HelpTriggerIcon, { HelpTriggerIconInternal } from './HelpTriggerIcon';

describe('Gitt at HelpTriggerIcon skal vises', (): void => {
  describe('Når htmlMarkup har default verdi', (): void => {
    test('Så rendres en <button> og aria verdier settes på tagen', (): void => {
      render(
        <HelpTriggerIcon
          aria-expanded={false}
          aria-controls="controls-id"
          aria-haspopup="true"
          testId="trigger"
          ariaLabelledById="label-id"
        />
      );
      const trigger = screen.getByTestId('trigger');

      expect(trigger.tagName).toBe('BUTTON');
      expect(trigger).toHaveAttribute('aria-expanded');
      expect(trigger).toHaveAttribute('aria-controls');
      expect(trigger).toHaveAttribute('aria-haspopup');
      expect(trigger).toHaveAttribute('aria-labelledby', 'label-id');
    });
  });

  describe('Når htmlMarkup settes til span', (): void => {
    test('Så rendres en <span> uten aria attributter', (): void => {
      render(<HelpTriggerIconInternal htmlMarkup="span" testId="trigger" ariaLabel="test" ariaLabelledById="label-id" />);
      const trigger = screen.getByTestId('trigger');

      expect(trigger.tagName).toBe('SPAN');
      expect(trigger).not.toHaveAttribute('aria-expanded');
      expect(trigger).not.toHaveAttribute('aria-labelledby', 'label-id');
      expect(trigger).not.toHaveAttribute('aria-label');
    });
  });

  describe('Når brukeren klikker på knappen', (): void => {
    test('Så kalles onClick callback', (): void => {
      const onClick = vi.fn();
      render(<HelpTriggerIcon testId="trigger" onClick={onClick} />);
      fireEvent.click(screen.getByTestId('trigger'));
      const trigger = screen.getByTestId('trigger');
      expect(trigger.tagName).toBe('BUTTON');
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når ekstra ARIA-attributes gis som props', (): void => {
    test('Så videresendes aria-haspopup og aria-controls', (): void => {
      render(<HelpTriggerIcon aria-haspopup="true" aria-controls="popup-id" testId="trigger" />);
      const btn = screen.getByTestId('trigger');

      expect(btn).toHaveAttribute('aria-haspopup', 'true');
      expect(btn).toHaveAttribute('aria-controls', 'popup-id');
    });
  });
});
