import React from 'react';
import {render} from 'react-testing-library';
import Icon from '.';

test('default variant renders correctly', () => {
  const {container} = render(<Icon>calendar</Icon>);
  expect(container).toMatchSnapshot();
});
