import React from 'react';
import {render} from 'react-testing-library';
import '../../../constants';
import ActionButton from './ActionButton';

test('renders correctly', (): void => {
  const {container} = render(<ActionButton>ActionButton</ActionButton>);
  expect(container).toMatchSnapshot();
});
