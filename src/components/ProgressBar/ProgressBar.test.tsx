import React from 'react';
import {render} from 'react-testing-library';
import {ProgressBar} from './ProgressBar';

test('renders correctly', (): void => {
  const {container} = render(<ProgressBar value={0}>ProgressBar</ProgressBar>);
  expect(container).toMatchSnapshot();
});
