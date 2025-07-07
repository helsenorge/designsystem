import { render } from '@testing-library/react';

import HelpTeaser from './HelpTeaser';

describe('Gitt at HelpTeaser skal vises', (): void => {
  describe('Når HelpTeaser vises', (): void => {
    test('Så vises HelpTeaser', (): void => {
      render(<HelpTeaser title="Tittel">{'Tekst'}</HelpTeaser>);
    });
  });
});
