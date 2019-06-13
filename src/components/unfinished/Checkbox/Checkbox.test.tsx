import React from 'react';
import {render} from 'react-testing-library';
import Checkbox from './Checkbox';

test('renders correctly', (): void => {
  const {container} = render(<Checkbox>Checkbox</Checkbox>);
  expect(container).toMatchSnapshot();
});
