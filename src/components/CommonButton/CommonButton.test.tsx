import React from 'react';
import {render} from '@testing-library/react';
import {CommonButton} from './CommonButton';

test('renders default variant correctly', (): void => {
  const {container} = render(<CommonButton>CommonButton</CommonButton>);
  expect(container).toMatchSnapshot();
});
