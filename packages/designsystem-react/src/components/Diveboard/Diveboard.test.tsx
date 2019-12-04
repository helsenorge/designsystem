import React from 'react';
import {render} from '@testing-library/react';
import {DiveBoard} from './DiveBoard';

test('renders default variant correctly', (): void => {
  const {container} = render(<DiveBoard></DiveBoard>);
  expect(container).toMatchSnapshot();
});
