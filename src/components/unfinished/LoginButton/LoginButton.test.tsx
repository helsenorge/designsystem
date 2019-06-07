import React from 'react';
import {render} from 'react-testing-library';
import LoginButton from './LoginButton';

test('renders correctly', (): void => {
  const {container} = render(<LoginButton>LoginButton</LoginButton>);
  expect(container).toMatchSnapshot();
});
