import React from 'react';
import {render} from '@testing-library/react';
import Logo from './Logo';

test('displays original logo', (): void => {
  const {container} = render(<Logo />);
  expect(container).toMatchSnapshot();
});

test('displays byline logo', (): void => {
  const {container} = render(<Logo byline />);
  expect(container).toMatchSnapshot();
});
