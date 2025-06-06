import { render, screen, fireEvent } from '@testing-library/react';

import HelpExpanderStandalone from './HelpExpanderStandalone';

describe('Gitt at HelpExpanderStandalone skal vises', (): void => {
  describe('Når HelpExpanderStandalone vises', (): void => {
    test('Så vises trigger-teksten', (): void => {
      render(<HelpExpanderStandalone triggerText="Hjelpetrigger">{'Hjelpetekst'}</HelpExpanderStandalone>);
      expect(screen.getByText('Hjelpetrigger')).toBeInTheDocument();
    });

    test('Så vises ikke hjelpeteksten før man klikker', (): void => {
      render(<HelpExpanderStandalone triggerText="Trigger">{'Dette er hjelpetekst'}</HelpExpanderStandalone>);
      expect(screen.queryByText('Dette er hjelpetekst')).not.toBeInTheDocument();
    });

    test('Så toggler hjelpeteksten ved klikk og viser innholdet under toggling', (): void => {
      render(<HelpExpanderStandalone triggerText="Trigger">{'Tekst'}</HelpExpanderStandalone>);
      const button = screen.getByRole('button');

      fireEvent.click(button);
      expect(screen.getByText('Tekst')).toBeInTheDocument();

      fireEvent.click(button);
      expect(screen.queryByText('Tekst')).not.toBeInTheDocument();
    });

    test('Så kalles onExpand med riktig verdi', (): void => {
      const onExpand = vi.fn();
      render(
        <HelpExpanderStandalone triggerText="Trigger" onExpand={onExpand}>
          {'Tekst'}
        </HelpExpanderStandalone>
      );
      fireEvent.click(screen.getByRole('button'));
      expect(onExpand).toHaveBeenCalledWith(true);
      fireEvent.click(screen.getByRole('button'));
      expect(onExpand).toHaveBeenCalledWith(false);
    });

    test('Så vises hjelpetekst dersom expanded=true ved initialisering', (): void => {
      render(
        <HelpExpanderStandalone triggerText="Trigger" expanded>
          {'Forhåndsvist hjelp'}
        </HelpExpanderStandalone>
      );
      expect(screen.getByText('Forhåndsvist hjelp')).toBeInTheDocument();
    });
  });
});
