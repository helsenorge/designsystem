import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

jest.mock('uuid', () => {
  const uuidGen = (): string => `-unik-id`;
  return { v4: uuidGen };
});

describe('Gitt at en loader skal vises ', (): void => {
  describe('Når at en loader rendres ', (): void => {
    test('Så vises loaderen', (): void => {
      const { container } = render(<Loader />);
      expect(container).toMatchSnapshot();
    });

    test('Så er alle fire loaderDots riktig plassert', (): void => {
      render(<Loader testId={'loaderDotTest'} />);
      const loaderDotsWrapper = screen.getByTestId('loaderDotTest');

      expect(loaderDotsWrapper.children[0].className).toBe('loader__dot loader__dot--small loader__dot--neutral');
      expect(loaderDotsWrapper.children[1].className).toBe('loader__dot loader__dot--small loader__dot--neutral');
      expect(loaderDotsWrapper.children[2].className).toBe('loader__dot loader__dot--small loader__dot--neutral');
      expect(loaderDotsWrapper.children[3].className).toBe('loader__dot loader__dot--small loader__dot--neutral');
    });

    test('Så har loader progressbar role', (): void => {
      render(<Loader overlay />);
      expect(screen.getByRole('progressbar')).toBeVisible();
    });
  });

  describe('Når center prop er true ', (): void => {
    test('Så sentreres loader', (): void => {
      const { container } = render(<Loader center />);
      expect(container.firstChild).toHaveClass('loader-wrapper--center');
    });
  });

  describe('Når overlay prop er true', (): void => {
    test('Så har loaderen en overlay', (): void => {
      const { container } = render(<Loader overlay />);
      expect(container.firstChild).toHaveClass('loader-wrapper--overlay');
      expect(container.firstChild.firstChild).toHaveAttribute('aria-labelledby', 'loader-unik-id');
    });
  });

  describe('Når ariaLabelledById er satt', (): void => {
    test('Så settes attributten aria-labelledby til det samme', (): void => {
      const { container } = render(<Loader ariaLabelledById="aria-test" overlay />);
      expect(container.firstChild).toHaveClass('loader-wrapper--overlay');
      expect(container.firstChild.firstChild).toHaveAttribute('aria-labelledby', 'aria-test');
    });
  });
});
