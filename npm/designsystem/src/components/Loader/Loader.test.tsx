import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

jest.mock('uuid', () => {
  const uuidGen = (): string => `-unik-id`;
  return { v4: uuidGen };
});

test('displays the loader', (): void => {
  const { container } = render(<Loader />);
  expect(container).toMatchSnapshot();
});

test('center loader', (): void => {
  const { container } = render(<Loader center />);
  expect(container.firstChild).toHaveClass('center');
});

test('loader has overlay', (): void => {
  const { container } = render(<Loader overlay />);
  expect(container.firstChild).toHaveClass('overlay');
  expect(container.firstChild.firstChild).toHaveAttribute('aria-labelledby', 'loader-unik-id');
});

test('loader has progressbar role', (): void => {
  render(<Loader overlay />);
  expect(screen.getByRole('progressbar')).toBeVisible();
});

test('loader has external aria-labelledby', (): void => {
  const { container } = render(<Loader ariaLabelledById="aria-test" overlay />);
  expect(container.firstChild).toHaveClass('overlay');
  expect(container.firstChild.firstChild).toHaveAttribute('aria-labelledby', 'aria-test');
});
