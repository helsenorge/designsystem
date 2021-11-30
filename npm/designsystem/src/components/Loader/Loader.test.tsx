import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

test('displays the loader', (): void => {
  const { container } = render(<Loader />);
  expect(container).toMatchSnapshot();
});

test('center loader', (): void => {
  const { container } = render(<Loader center/>);
  expect(container.firstChild).toHaveClass('center');
});

test('loader has overlay', (): void => {
  const { container } = render(<Loader overlay/>);
  expect(container.firstChild).toHaveClass('overlay')
});
