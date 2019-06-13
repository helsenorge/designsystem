import React from 'react';
import {render} from 'react-testing-library';
import CheckboxGroup from './CheckboxGroupGroup';

test('renders correctly', (): void => {
  const {container} = render(<CheckboxGroup>CheckboxGroup</CheckboxGroup>);
  expect(container).toMatchSnapshot();
});
