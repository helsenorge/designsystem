import React from 'react';

import { render, screen, within } from '@testing-library/react';

import { getIllustration } from './utils';
import Illustration from '../Illustration';
import Doctor from '../Illustrations/Doctor';

describe('Gitt at Illustration skal vises', (): void => {
  describe('Når Illustration rendres med default størrelse', (): void => {
    test('Så vises illustrasjon i størrelse medium', (): void => {
      render(<Illustration illustration={Doctor} />);

      const illustration = screen.getByTestId('doctor-medium');

      expect(illustration).toBeInTheDocument();
    });
  });

  describe('Når Illustration rendres med size=201', (): void => {
    test('Så vises illustrasjon i størrelse medium', (): void => {
      render(<Illustration illustration={Doctor} size={201} />);
      const illustration = screen.getByTestId('doctor-medium');

      expect(illustration).toBeInTheDocument();
    });
  });

  describe('Når Illustration rendres med size=200', (): void => {
    test('Så vises illustrasjon i størrelse small', (): void => {
      render(<Illustration illustration={Doctor} size={200} />);
      const illustration = screen.getByTestId('doctor-small');

      expect(illustration).toBeInTheDocument();
    });
  });

  describe('Når Illustration rendres', (): void => {
    test('Så settes størrelse riktig', (): void => {
      render(<Illustration testId={'test01'} size={200} illustration={Doctor} />);

      const illustration = screen.getByTestId('test01');
      expect(illustration).toHaveStyle(`min-width: ${200}px;`);
      expect(illustration).toHaveStyle(`min-height: ${200}px;`);
    });
  });

  // https://css-tricks.com/accessible-svgs/#aa-example-1-standalone-icon-meaningful
  describe('Når ariaLabel er satt', (): void => {
    test('Så er illustrasjonen synlig for skjermlesere og har tekst som kan leses', (): void => {
      render(<Illustration ariaLabel="Lege" illustration={Doctor} />);

      const illustration = screen.getByRole('img', { name: 'Lege' });

      expect(illustration).toBeVisible();
      expect(illustration).toHaveAttribute('focusable', 'false');
      expect(illustration).not.toHaveAttribute('aria-hidden');
      expect(illustration).toHaveAttribute('aria-labelledby');

      const title = within(illustration).getByTitle('Lege');
      expect(title).toBeInTheDocument();

      expect(illustration.getAttribute('aria-labelledby')).toEqual(title.id);
    });
  });

  describe('Når ariaLabel ikke er satt', (): void => {
    test('Så er illustrasjonen skjult for skjermlesere', (): void => {
      render(<Illustration illustration={Doctor} />);

      const illustration = screen.getByRole('presentation', { hidden: true });

      expect(illustration).toBeInTheDocument();
      expect(illustration).toHaveAttribute('focusable', 'false');
      expect(illustration).toHaveAttribute('aria-hidden', 'true');
    });
  });
});

describe('Gitt at getIllustration kalles', (): void => {
  describe('Når alle størrelser finnes', (): void => {
    describe('Når ønsket størrelse er 512 eller større', (): void => {
      test('Så returneres large', (): void => {
        const result = getIllustration({ size: 512, large: 'large', medium: 'medium', small: 'small' });

        expect(result).toEqual('large');
      });
    });
    describe('Når ønsket størrelse er 201 eller større', (): void => {
      test('Så returneres medium', (): void => {
        const result = getIllustration({ size: 201, large: 'large', medium: 'medium', small: 'small' });

        expect(result).toEqual('medium');
      });
    });
    describe('Når ønsket størrelse er 200 eller større', (): void => {
      test('Så returneres small', (): void => {
        const result = getIllustration({ size: 200, large: 'large', medium: 'medium', small: 'small' });

        expect(result).toEqual('small');
      });
    });
  });
  describe('Når large og small finnes', (): void => {
    describe('Når ønsket størrelse er 512 eller større', (): void => {
      test('Så returneres large', (): void => {
        const result = getIllustration({ size: 512, large: 'large', medium: 'medium' });

        expect(result).toEqual('large');
      });
    });
    describe('Når ønsket størrelse er 201 eller større', (): void => {
      test('Så returneres medium', (): void => {
        const result = getIllustration({ size: 201, large: 'large', medium: 'medium' });

        expect(result).toEqual('medium');
      });
    });
    describe('Når ønsket størrelse er 200 eller større', (): void => {
      test('Så returneres medium', (): void => {
        const result = getIllustration({ size: 200, large: 'large', medium: 'medium' });

        expect(result).toEqual('medium');
      });
    });
  });
  describe('Når medium og small finnes', (): void => {
    describe('Når ønsket størrelse er 512 eller større', (): void => {
      test('Så returneres medium', (): void => {
        const result = getIllustration({ size: 512, medium: 'medium', small: 'small' });

        expect(result).toEqual('medium');
      });
    });
    describe('Når ønsket størrelse er 201 eller større', (): void => {
      test('Så returneres medium', (): void => {
        const result = getIllustration({ size: 201, medium: 'medium', small: 'small' });

        expect(result).toEqual('medium');
      });
    });
    describe('Når ønsket størrelse er 200 eller større', (): void => {
      test('Så returneres small', (): void => {
        const result = getIllustration({ size: 200, medium: 'medium', small: 'small' });

        expect(result).toEqual('small');
      });
    });
  });
  describe('Når bare small finnes', (): void => {
    describe('Når ønsket størrelse er 512 eller større', (): void => {
      test('Så returneres small', (): void => {
        const result = getIllustration({ size: 512, small: 'small' });

        expect(result).toEqual('small');
      });
    });
    describe('Når ønsket størrelse er 201 eller større', (): void => {
      test('Så returneres small', (): void => {
        const result = getIllustration({ size: 201, small: 'small' });

        expect(result).toEqual('small');
      });
    });
    describe('Når ønsket størrelse er 200 eller større', (): void => {
      test('Så returneres small', (): void => {
        const result = getIllustration({ size: 200, small: 'small' });

        expect(result).toEqual('small');
      });
    });
  });
});
