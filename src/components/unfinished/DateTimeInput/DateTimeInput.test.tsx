import React from 'react';
import {render} from 'react-testing-library';
import DateTimeInput from './DateTimeInputGroup';

test('renders correctly', (): void => {
  const {container} = render(<DateTimeInput>DateTimeInput</DateTimeInput>);
  expect(container).toMatchSnapshot();
});
