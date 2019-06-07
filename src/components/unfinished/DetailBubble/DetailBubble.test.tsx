import React from 'react';
import {render} from 'react-testing-library';
import DetailBubble from './DetailBubble';

test('renders correctly', (): void => {
  const {container} = render(<DetailBubble>DetailBubble</DetailBubble>);
  expect(container).toMatchSnapshot();
});
