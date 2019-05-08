import React from 'react';
import {render} from 'react-testing-library';
import ActionButton from '.';
import '../../constants';

test('default variant renders correctly', (): void => {
  const {container} = render(<ActionButton>ActionButton</ActionButton>);
  expect(container).toMatchSnapshot();
});
