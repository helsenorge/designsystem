import React from 'react';
import {render} from '@testing-library/react';
import FunctionButton from './FunctionButton';
import {Icon} from '../../..';

test('renders default variant correctly', (): void => {
  const {container} = render(<FunctionButton leftIcon={<Icon>eye</Icon>}>ActionButton</FunctionButton>);
  expect(container).toMatchSnapshot();
});
