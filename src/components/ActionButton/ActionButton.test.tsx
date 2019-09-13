import React from 'react';
import {render} from '@testing-library/react';
import '../../constants';
import {ActionButton} from './ActionButton';

test('renders correctly', (): void => {
  const {container} = render(<ActionButton>ActionButton</ActionButton>);
  expect(container).toMatchSnapshot();
});
