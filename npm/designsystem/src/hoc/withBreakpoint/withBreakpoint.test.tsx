import React from 'react';

import { render, screen } from '@testing-library/react';

import type { BreakpointProps } from './withBreakpoint';

import { withBreakpoint } from './withBreakpoint';
import { mockWindowMatchMedia } from '../../__mocks__/matchMedia';
import { Breakpoint } from '../../hooks/useBreakpoint';
import { screen as themeScreen } from '../../theme/grid';

const Example: React.FC<BreakpointProps> = ({ breakpoint }) => {
  return <>{`${Breakpoint[breakpoint]}/${breakpoint}`}</>;
};

const ExampleWithBreakpoint = withBreakpoint(Example);

class ClassExample extends React.Component<BreakpointProps> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return <>{`${Breakpoint[this.props.breakpoint]}/${this.props.breakpoint}`}</>;
  }
}

const ClassExampleWithBreakpoint = withBreakpoint(ClassExample);

describe('Gitt at withBreakpoint skal vises', (): void => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  describe('Når skjermbredden er xl', (): void => {
    test('Så er returnerer withBreakpoint xl breakpoint', (): void => {
      mockWindowMatchMedia.mockImplementation(query => ({
        matches: query === themeScreen.xl,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('xl/1450')).toBeVisible();
    });
  });
  describe('Når skjermbredden er lg', (): void => {
    test('Så er returnerer withBreakpoint lg breakpoint', (): void => {
      mockWindowMatchMedia.mockImplementation(query => ({
        matches: query === themeScreen.lg,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('lg/1088')).toBeVisible();
    });
  });
  describe('Når skjermbredden er md', (): void => {
    test('Så er returnerer withBreakpoint md breakpoint', (): void => {
      mockWindowMatchMedia.mockImplementation(query => ({
        matches: query === themeScreen.md,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('md/768')).toBeVisible();
    });
  });
  describe('Når skjermbredden er sm', (): void => {
    test('Så er returnerer withBreakpoint sm breakpoint', (): void => {
      mockWindowMatchMedia.mockImplementation(query => ({
        matches: query === themeScreen.sm,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('sm/564')).toBeVisible();
    });
  });
  describe('Når skjermbredden er xs', (): void => {
    test('Så er returnerer withBreakpoint xs breakpoint', (): void => {
      mockWindowMatchMedia.mockImplementation(query => ({
        matches: query === themeScreen.xs,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('xs/360')).toBeVisible();
    });
  });
  describe('Når skjermbredden er xxs', (): void => {
    test('Så er returnerer withBreakpoint xxs breakpoint', (): void => {
      mockWindowMatchMedia.mockImplementation(query => ({
        matches: query === themeScreen.xxs,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      render(<ExampleWithBreakpoint />);

      expect(screen.getByText('xxs/0')).toBeVisible();
    });
  });
  describe('Når komponenten er klassebasert', (): void => {
    test('Så er returnerer withBreakpoint breakpoint', (): void => {
      mockWindowMatchMedia.mockImplementation(query => ({
        matches: query === themeScreen.xl,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      render(<ClassExampleWithBreakpoint />);

      expect(screen.getByText('xl/1450')).toBeVisible();
    });
  });
});
