import React from 'react';
import {render} from '@testing-library/react';
import AnchorLink from './AnchorLink';

test('displays h1 default', (): void => {
  const {container} = render(<AnchorLink>AnchorLink</AnchorLink>);
  expect(container).toMatchSnapshot();
});
