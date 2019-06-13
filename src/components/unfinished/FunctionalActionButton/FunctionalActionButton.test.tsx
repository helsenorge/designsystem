import React from 'react';
import {render} from 'react-testing-library';
import FunctionalActionButton from './FunctionalActionButton';

test('renders correctly', (): void => {
  const {container} = render(<FunctionalActionButton>FunctionalActionButton</FunctionalActionButton>);
  expect(container).toMatchSnapshot();
});
