import React from 'react';
import {render} from 'react-testing-library';
import SaveButton from './SaveButton';

test('renders correctly', (): void => {
  const {container} = render(<SaveButton>SaveButton</SaveButton>);
  expect(container).toMatchSnapshot();
});
