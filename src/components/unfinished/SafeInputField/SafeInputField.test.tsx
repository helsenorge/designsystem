import React from 'react';
import {render} from 'react-testing-library';
import Dropzone from './Dropzone';

test('renders correctly', (): void => {
  const {container} = render(<Dropzone>Dropzone</Dropzone>);
  expect(container).toMatchSnapshot();
});
