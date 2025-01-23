import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StickyNote from './StickyNote';

describe('Gitt at StickyNote skal vises', (): void => {
  describe('Når StickyNote vises', (): void => {
    test('Så vises StickyNote', (): void => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" testId="note" />);
      const textarea = screen.getByTestId('note');
      expect(textarea).toBeInTheDocument();
    });

    test('Så vises timestamp', (): void => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" />);
      const timestamp = screen.getByText('12.04.24 11:14');
      expect(timestamp).toBeInTheDocument();
    });

    test('Så vises footerText', (): void => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" footerText="Footer text" />);
      const footer = screen.getByText('Footer text');
      expect(footer).toBeInTheDocument();
    });

    test('Så vises errorText', (): void => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" error errorText="Error text" />);
      const errortext = screen.getByText('Error text');
      expect(errortext).toBeInTheDocument();
    });

    test('Så kan textarea være disabled', (): void => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" disabled testId="note" />);
      const textbox = screen.getByTestId('note-textarea');
      expect(textbox).toBeDisabled();
    });

    test('Så kan textarea ha en placeholder', (): void => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" placeholder="Skriv her..." />);
      const placeholder = screen.getByPlaceholderText('Skriv her...');
      expect(placeholder).toBeInTheDocument();
    });

    test('Så kan textarea ha en defaultValue', (): void => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" defaultValue="Default text" />);
      const textarea = screen.getByDisplayValue('Default text');
      expect(textarea).toBeInTheDocument();
    });

    test('Så kan textarea ha en verdi som kan endres', async (): Promise<void> => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" defaultValue="Start-tekst." testId="note" />);

      const input = screen.getByTestId('note-textarea') as HTMLTextAreaElement;

      expect(input).toBeVisible();

      await userEvent.type(input, ' Legger til teksten her.');

      expect(input).toHaveValue('Start-tekst. Legger til teksten her.');
    });

    test('Så kan textarea ha en onChange handler', (): void => {
      const handleChange = vi.fn();
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" value="Initial text" onChange={handleChange} />);
      const textarea = screen.getByDisplayValue('Initial text') as HTMLTextAreaElement;
      fireEvent.change(textarea, { target: { value: 'Changed text' } });
      expect(handleChange).toHaveBeenCalled();
    });

    test('Så kan textarea ha en onFocus handler', (): void => {
      const handleFocus = vi.fn();
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" value="Initial text" onFocus={handleFocus} />);
      const textarea = screen.getByDisplayValue('Initial text') as HTMLTextAreaElement;
      fireEvent.focus(textarea);
      expect(handleFocus).toHaveBeenCalled();
    });

    test('Så kan textarea ha en onBlur handler', (): void => {
      const handleBlur = vi.fn();
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" value="Initial text" onBlur={handleBlur} />);
      const textarea = screen.getByDisplayValue('Initial text') as HTMLTextAreaElement;
      fireEvent.blur(textarea);
      expect(handleBlur).toHaveBeenCalled();
    });

    test('Så kan onXButtonClick kalles når X-knappen klikkes', async (): Promise<void> => {
      const handleXButtonClick = vi.fn();
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" onXButtonClick={handleXButtonClick} />);
      const button = screen.getByRole('button');
      await userEvent.click(button);
      expect(handleXButtonClick).toHaveBeenCalled();
    });

    test('Så kan onClickWhileDisabled kalles når komponenten er disabled og klikkes', async (): Promise<void> => {
      const handleClickWhileDisabled = vi.fn();
      render(
        <StickyNote
          arialabelXButton="Slett notat"
          timestamp="12.04.24 11:14"
          disabled
          onClickWhileDisabled={handleClickWhileDisabled}
          testId="note"
        />
      );
      const wrapper = screen.getByTestId('note');
      await userEvent.click(wrapper);
      expect(handleClickWhileDisabled).toHaveBeenCalled();
    });

    test('Så vises riktig styling når komponenten har error', (): void => {
      render(<StickyNote arialabelXButton="Slett notat" timestamp="12.04.24 11:14" error testId="note" />);
      const wrapper = screen.getByTestId('note');
      expect(wrapper).toHaveClass('sticky-note--error');
    });
  });
});
