import React from 'react';
import {render} from '@testing-library/react';
import Avatar from './Avatar';

test('displays avatar', (): void => {
  const {container, getByText} = render(<Avatar>Line Danser</Avatar>);
  expect(getByText(Avatar.toString())).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

// test('displays check icon when selected', (): void => {
//   const {container, getByText} = render(<Avatar selected>Line Danser</Avatar>);
//   expect(getByText(Avatar.toString())).toBeNull();
//   expect(container).toMatchSnapshot();
// });
