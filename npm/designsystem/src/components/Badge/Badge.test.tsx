import React from 'react';
import { render } from '@testing-library/react';
import Badge from './Badge';
// import 'jest-styled-components';
// import {palette} from '../../theme';

const badgeNumber = 123;

test('displays text', (): void => {
  const { container, getByText } = render(<Badge>{badgeNumber}</Badge>);
  expect(getByText(badgeNumber.toString())).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

/* 
  TODO: Waiting for issues regarding babel and types for this to be implemented
  Seems to be version issues because of v5 release.
*/
// test('has the right color', (): void => {
//   const {container} = render(<Badge color="blood200">{badgeNumber}</Badge>);
//   expect(container).toMatchSnapshot();
// });
