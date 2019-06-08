import React from 'react';
import {render} from 'react-testing-library';
import {Block} from './Block';

test('renders correctly', (): void => {
  const {container} = render(<Block>Block</Block>);
  expect(container).toMatchSnapshot();
});
