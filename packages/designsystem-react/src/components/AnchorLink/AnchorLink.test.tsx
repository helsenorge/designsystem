import React from 'react';
import {render} from '@testing-library/react';
import AnchorLink from './AnchorLink';

test('displays default anchorlink', (): void => {
  const {container} = render(<AnchorLink target={'_self'}>AnchorLink</AnchorLink>);
  expect(container).toMatchSnapshot();
});

test('displays external anchorlink', (): void => {
  const {container} = render(<AnchorLink target={'_blank'}>AnchorLink external</AnchorLink>);
  expect(container).toMatchSnapshot();
});
