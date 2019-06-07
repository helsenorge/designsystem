import React from 'react';
import {render} from 'react-testing-library';
import Dropdown from './Dropdown';

test('renders correctly', (): void => {
  const {container} = render(<Dropdown>Dropdown</Dropdown>);
  expect(container).toMatchSnapshot();
});
