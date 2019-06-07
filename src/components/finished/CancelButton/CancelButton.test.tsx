import React from 'react';
import {render} from 'react-testing-library';
import CancelButton from './CancelButton';

test('renders correctly', (): void => {
  const {container} = render(<CancelButton>CancelButton</CancelButton>);
  expect(container).toMatchSnapshot();
});
