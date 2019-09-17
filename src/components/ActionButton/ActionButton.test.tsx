import React from 'react';
import {render} from '@testing-library/react';
import {ActionButton} from './ActionButton';

test('renders default variant correctly', (): void => {
  const {container} = render(<ActionButton>ActionButton</ActionButton>);
  expect(container).toMatchSnapshot();
});

test('renders secondary variant correctly', (): void => {
  const {container} = render(<ActionButton variant="secondary">ActionButton</ActionButton>);
  expect(container).toMatchSnapshot();
});
