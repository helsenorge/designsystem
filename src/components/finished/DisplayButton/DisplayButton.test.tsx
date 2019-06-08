import React from 'react';
import {render} from 'react-testing-library';
import DisplayButton from './DisplayButton';

test('renders correctly', (): void => {
  const {container} = render(<DisplayButton>DisplayButton</DisplayButton>);
  expect(container).toMatchSnapshot();
});
