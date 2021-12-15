import React from 'react';
import { render } from '@testing-library/react';
import Spacer from './Spacer';

test('displays default spacer', (): void => {
  const { container } = render(<Spacer />);
  expect(container).toMatchSnapshot();
  expect(container.querySelector('span').className).toBe('spacer spacer--s');
});

test('displays 3xs spacer', (): void => {
  const { container } = render(<Spacer size="4xs" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--4xs');
});

test('displays 3xs spacer', (): void => {
  const { container } = render(<Spacer size="3xs" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--3xs');
});

test('displays 2xs spacer', (): void => {
  const { container } = render(<Spacer size="2xs" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--2xs');
});

test('displays xs spacer', (): void => {
  const { container } = render(<Spacer size="xs" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--xs');
});

test('displays s spacer', (): void => {
  const { container } = render(<Spacer size="s" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--s');
});

test('displays m spacer', (): void => {
  const { container } = render(<Spacer size="m" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--m');
});

test('displays l spacer', (): void => {
  const { container } = render(<Spacer size="l" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--l');
});

test('displays xl spacer', (): void => {
  const { container } = render(<Spacer size="xl" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--xl');
});

test('displays 2xl spacer', (): void => {
  const { container } = render(<Spacer size="2xl" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--2xl');
});

test('displays 3xl spacer', (): void => {
  const { container } = render(<Spacer size="3xl" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--3xl');
});

test('displays 4xl spacer', (): void => {
  const { container } = render(<Spacer size="4xl" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--4xl');
});

test('displays 5xl spacer', (): void => {
  const { container } = render(<Spacer size="5xl" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--5xl');
});

test('displays 6xl spacer', (): void => {
  const { container } = render(<Spacer size="6xl" />);
  expect(container.querySelector('span').className).toBe('spacer spacer--6xl');
});
