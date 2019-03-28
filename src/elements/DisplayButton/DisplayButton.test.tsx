import React from 'react';
import {render} from 'react-testing-library';
import DisplayButton from '.';

test('default variant renders correctly', () => {
  const {container} = render(<DisplayButton>Hello World</DisplayButton>);
  expect(container).toMatchSnapshot();
});
