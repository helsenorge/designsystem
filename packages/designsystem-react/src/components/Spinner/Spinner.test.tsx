import React from 'react';
import {render} from '@testing-library/react';
import {Spinner} from './Spinner';

test('renders default variant correctly', (): void => {
  const {container} = render(<Spinner />);
  expect(container).toMatchSnapshot();
});
