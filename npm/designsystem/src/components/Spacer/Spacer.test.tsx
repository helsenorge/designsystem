import React from 'react';
import { render } from '@testing-library/react';
import Spacer from './Spacer';

test('displays default spacer', (): void => {
  const { container } = render(<Spacer />);
  expect(container).toMatchSnapshot();
  expect(container.querySelector('span')).toHaveStyle('height: 1rem');
});

test('displays 3xs spacer', (): void => {
  const { container } = render(<Spacer size="3xs" />);
  expect(container.querySelector('span')).toHaveStyle('height: 0.125rem');
});

test('displays 2xs spacer', (): void => {
  const { container } = render(<Spacer size="2xs" />);
  expect(container.querySelector('span')).toHaveStyle('height: 0.25rem');
});

test('displays xs spacer', (): void => {
  const { container } = render(<Spacer size="xs" />);
  expect(container.querySelector('span')).toHaveStyle('height: 0.5rem');
});

test('displays s spacer', (): void => {
  const { container } = render(<Spacer size="s" />);
  expect(container.querySelector('span')).toHaveStyle('height: 1rem');
});

test('displays m spacer', (): void => {
  const { container } = render(<Spacer size="m" />);
  expect(container.querySelector('span')).toHaveStyle('height: 1.5rem');
});

test('displays l spacer', (): void => {
  const { container } = render(<Spacer size="l" />);
  expect(container.querySelector('span')).toHaveStyle('height: 2rem');
});

test('displays xl spacer', (): void => {
  const { container } = render(<Spacer size="xl" />);
  expect(container.querySelector('span')).toHaveStyle('height: 3rem');
});

test('displays 2xl spacer', (): void => {
  const { container } = render(<Spacer size="2xl" />);
  expect(container.querySelector('span')).toHaveStyle('height: 4rem');
});

test('displays 3xl spacer', (): void => {
  const { container } = render(<Spacer size="3xl" />);
  expect(container.querySelector('span')).toHaveStyle('height: 5rem');
});

test('displays 4xl spacer', (): void => {
  const { container } = render(<Spacer size="4xl" />);
  expect(container.querySelector('span')).toHaveStyle('height: 6rem');
});

test('displays 5xl spacer', (): void => {
  const { container } = render(<Spacer size="5xl" />);
  expect(container.querySelector('span')).toHaveStyle('height: 7rem');
});

test('displays 6xl spacer', (): void => {
  const { container } = render(<Spacer size="6xl" />);
  expect(container.querySelector('span')).toHaveStyle('height: 8rem');
});
