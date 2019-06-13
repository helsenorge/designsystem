import React from 'react';
import {render} from 'react-testing-library';
import InlineButton from './InlineButton';

test('renders correctly', (): void => {
  const {container} = render(<InlineButton>InlineButton</InlineButton>);
  expect(container).toMatchSnapshot();
});
