import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

test('displays h1 default', (): void => {
  const { container } = render(<Title>Title</Title>);
  expect(container).toMatchSnapshot();
});
