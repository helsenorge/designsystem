import { render, screen } from '@testing-library/react';

import HelpDetails from './HelpDetails';

describe('Gitt at HelpDetails skal vises', (): void => {
  describe('Når HelpDetails vises', (): void => {
    test('Så vises HelpDetails', (): void => {
      render(<HelpDetails>{'Innhold'}</HelpDetails>);
      expect(screen.getByText('Innhold')).toBeInTheDocument();
    });
  });
});
