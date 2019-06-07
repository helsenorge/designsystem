import React from 'react';
import {render} from 'react-testing-library';
import ButtonWithLogos from './ButtonWithLogos';

test('renders correctly', (): void => {
  const {container} = render(<ButtonWithLogos>ButtonWithLogos</ButtonWithLogos>);
  expect(container).toMatchSnapshot();
});
