import React from 'react';

import { render, screen } from '@testing-library/react';

import HelpExpanderInline from './HelpExpanderInline';

describe('Gitt at HelpExpanderInline skal vises', (): void => {
  describe('Når HelpExpanderInline vises', (): void => {
    test('Så rendres komponenten', (): void => {
      render(<HelpExpanderInline>{'Test'}</HelpExpanderInline>);
    });

    test('Så vises ikke hjelpeteksten når expanded er false', (): void => {
      render(<HelpExpanderInline expanded={false}>{'Skjult tekst'}</HelpExpanderInline>);
      expect(screen.queryByText('Skjult tekst')).not.toBeInTheDocument();
    });

    test('Så vises hjelpeteksten når expanded er true', (): void => {
      render(<HelpExpanderInline expanded>{'Synlig tekst'}</HelpExpanderInline>);
      expect(screen.getByText('Synlig tekst')).toBeInTheDocument();
    });

    test('Så forwards ref til yttercontaineren', (): void => {
      const outerRef = React.createRef<HTMLDivElement>();
      render(
        <HelpExpanderInline expanded ref={outerRef}>
          {'Testinnhold'}
        </HelpExpanderInline>
      );
      expect(outerRef.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});
