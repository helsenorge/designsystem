import React from 'react';
import {render} from 'react-testing-library';
import ActionButton from '.';
import '../../constants';

test('default variant renders correctly', () => {
  const {container} = render(<ActionButton>Hello World</ActionButton>);
  expect(container).toMatchSnapshot();
});
