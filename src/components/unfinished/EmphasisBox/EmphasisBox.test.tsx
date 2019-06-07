import React from 'react';
import {render} from 'react-testing-library';
import EmphasisBox from './EmphasisBox';

test('renders correctly', (): void => {
  const {container} = render(<EmphasisBox>EmphasisBox</EmphasisBox>);
  expect(container).toMatchSnapshot();
});
