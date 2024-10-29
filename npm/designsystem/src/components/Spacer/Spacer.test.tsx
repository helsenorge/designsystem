import { render, screen } from '@testing-library/react';

import Spacer from './Spacer';

test('displays 3xs spacer', (): void => {
  render(<Spacer size="4xs" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--4xs');
});

test('displays 3xs spacer', (): void => {
  render(<Spacer size="3xs" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--3xs');
});

test('displays 2xs spacer', (): void => {
  render(<Spacer size="2xs" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--2xs');
});

test('displays xs spacer', (): void => {
  render(<Spacer size="xs" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--xs');
});

test('displays s spacer', (): void => {
  render(<Spacer size="s" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--s');
});

test('displays m spacer', (): void => {
  render(<Spacer size="m" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--m');
});

test('displays l spacer', (): void => {
  render(<Spacer size="l" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--l');
});

test('displays xl spacer', (): void => {
  render(<Spacer size="xl" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--xl');
});

test('displays 2xl spacer', (): void => {
  render(<Spacer size="2xl" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--2xl');
});

test('displays 3xl spacer', (): void => {
  render(<Spacer size="3xl" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--3xl');
});

test('displays 4xl spacer', (): void => {
  render(<Spacer size="4xl" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--4xl');
});

test('displays 5xl spacer', (): void => {
  render(<Spacer size="5xl" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--5xl');
});

test('displays 6xl spacer', (): void => {
  render(<Spacer size="6xl" testId="test-spacer" />);
  const spacer = screen.getByTestId('test-spacer');
  expect(spacer.className).toBe('spacer spacer--6xl');
});

describe('Gitt at Spacer skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Spacer testId="bare-tester" />);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
