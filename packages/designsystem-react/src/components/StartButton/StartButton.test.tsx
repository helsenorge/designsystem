import React from 'react';
import {render} from '@testing-library/react';
import {StartButton} from './StartButton';

test('renders default variant correctly', (): void => {
  const {container} = render(<StartButton>StartButton</StartButton>);
  expect(container).toMatchSnapshot();
});
