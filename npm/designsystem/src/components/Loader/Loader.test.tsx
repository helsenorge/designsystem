import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

test('displays the loader', (): void => {
  const { container } = render(<Loader />);
  expect(container).toMatchSnapshot();
});
